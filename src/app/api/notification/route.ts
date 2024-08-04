// pages/api/products.js

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { convertForTagOrClassOrID } from '@/services/convertir';
import * as cheerio from 'cheerio';
import { sendEmail } from '@/services/mail';

const prisma=new PrismaClient();
export const GET = async (req: NextRequest) => {
    try {
  
          // Récupérer tous les produits
  const products = await prisma.product.findMany();

  // Regrouper les produits par e-mail d'utilisateur
  const userProducts:any = {};

  for (const product of products) {
    const website = await prisma.website.findUnique({
      where: { websiteName: product.websiteName }
    });

    if (!website) {
      console.error(`Website ${product.websiteName} not found`);
      continue;
    }

    const title = convertForTagOrClassOrID(website.titleValue, website.titleRef);
    const price = convertForTagOrClassOrID(website.priceValue, website.priceRef);

    try {
      const { data: html } = await axios.get(product.url);
      const $ = cheerio.load(html);

      const titleProd = $(title).text().trim();
      const priceProd = $(price).text().trim();

      if (!titleProd || !priceProd) {
        throw new Error('Error scraping product data');
      }

      await prisma.priceHistory.create({
        data: {
          productId: product.id,
          nameProduct: titleProd,
          url: product.url,
          price: priceProd
        }
      });

      const user = await prisma.user.findUnique({
        where: { id: product.userId }
      });

      if (user) {
        if (!userProducts[user.email]) {
          userProducts[user.email] = [];
        }

        userProducts[user.email].push({
          nameProduct: titleProd,
          price: priceProd,
          url: product.url
        });
      }
    } catch (error) {
      console.error('Error scraping product data', error);
    }
  }

  // Envoyer les e-mails
  for (const email in userProducts) {
    const products = userProducts[email];
    const subject = 'Mise à jour de vos produits';
    const text = products.map((p:any) =>
      `Produit: ${p.nameProduct}\nPrix: ${p.price}\nURL: ${p.url}\n\n`
    ).join('');
    
    try {
      await sendEmail(email, subject, text);
      console.log(`E-mail envoyé à ${email}`);
    } catch (error) {
      console.error(`Erreur lors de l'envoi de l'e-mail à ${email}`, error);
    }
  }

  return  NextResponse.json(userProducts);
  } catch (error) {
    console.log('error',error);
  return  NextResponse.json({message:error});

  }
}
