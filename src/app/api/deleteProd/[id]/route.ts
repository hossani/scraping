// pages/api/products.js

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const DELETE = async (req: NextRequest,{ params }: { params: { id: string } }) => {
    try {
        const id = params.id;  // Récupération de l'ID depuis les paramètres d'URL

    await prisma.$transaction([
        prisma.priceHistory.deleteMany({
            where: {
              productId:Number(id),
            },
        }),
        prisma.product.delete({
            where: {
                id:Number(id),
            },
        }),
    ]);  return  NextResponse.json({id});
  } catch (error) {
    console.log('error',error);
  return  NextResponse.json({message:error});

  }
}
