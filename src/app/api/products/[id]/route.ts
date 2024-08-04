// pages/api/products.js

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest,{ params }: { params: { id: string } }) => {
    try {
        const id = params.id;  // Récupération de l'ID depuis les paramètres d'URL
            console.log('id of product',id);
    const history = await prisma.priceHistory.findMany({
     where:{
        productId:Number(id),
     }
    });
  return  NextResponse.json(history);
  } catch (error) {
    console.log('error',error);
  return  NextResponse.json({message:error});

  }
}
