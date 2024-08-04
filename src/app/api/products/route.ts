// pages/api/products.js

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
    try {
        const {email } = await req.json();
     const user=await prisma.user.findUnique({
        where:{
            email,
        }
     })
    const products = await prisma.product.findMany({
     where:{
        userId:user?.id,
     }
    });
  return  NextResponse.json(products);
  } catch (error) {
    console.log('error',error);
  return  NextResponse.json({message:error});

  }
}
