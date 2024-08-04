'use server';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { convertForTagOrClassOrID } from '@/services/convertir';
import * as cheerio from 'cheerio';
import axios from 'axios';

const prisma = new PrismaClient();

const addProd = async (formData: FormData) => {
  const url = formData.get('url') as string;
  const websiteName = formData.get('websiteName') as string;
  const email = formData.get('email') as string;
  
  const user:any = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (user.nbrOperation >= 1 && !user.freemium) {
    console.log('Alert: Upgrade to freemium required');
 return redirect('/vip');
 }
const urlProd=await prisma.priceHistory.findFirst({
  where:{
    url
  }
})
if(urlProd){
  console.log('Alert: Produit already exist');
  return redirect('/addProduct');
}
  const website = await prisma.website.findUnique({
    where: {
      websiteName,
      userId: user?.id,
    }
  });

  if (!website) {
    throw new Error('Website not found');
  }

  const title = convertForTagOrClassOrID(website.titleValue, website.titleRef);
  const price = convertForTagOrClassOrID(website.priceValue, website.priceRef);

  try {
    const {data:html} = await axios.get(url);
    const $ =  cheerio.load(html);

    const titleProd = $(title).text().trim();
    const priceProd = $(price).text().trim();

     const scrapedData = {
      titleProd,
      priceProd
    };

  console.log('resultat de scraping',scrapedData)
    // Vérifiez si les données ont été correctement récupérées
    if (!scrapedData.titleProd || !scrapedData.priceProd) {
      throw new Error('Error scraping product data');
    } else {

     const [product]=  await prisma.$transaction([
      prisma.product.create({
        data:{
          userId:Number(user?.id) as number,
          initalPrice:priceProd as string,
          nameProduct:titleProd as string,
          websiteName:websiteName as string,
          url:url as string
        }
      }),
      prisma.user.update({
        where:{
          email
        },
        data:{
          nbrOperation:{
           increment:1
        }
      }})
     ])

      if(product){
        await prisma.priceHistory.create({
          data:{        
              productId: Number(product.id) as number,
            nameProduct:titleProd as string,
            url:url as string,
            price:priceProd as string,
          }
        });    
      }

      console.log('Résultat du scraping', scrapedData);
    }
  } catch (error) {
    console.error('Error scraping product data', error);
    throw new Error('Error scraping product data');
  }

  // Redirection
  redirect('/dashboard');
}

export { addProd };
