// pages/api/products.js

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const POST = async (req: NextRequest,{ params }: { params: { id: string } }) => {
    try {
const email=params.id;
const {freemium}=await req.json();
console.log('free',freemium)
     const user=await prisma.user.update({
        where:{
            email,
        },
        data:{
            freemium,
        }
     })

  return  NextResponse.json(user);
  } catch (error) {
    console.log('error',error);
  return  NextResponse.json({message:error});

  }
}
