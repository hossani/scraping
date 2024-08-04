import { auth } from '../../../../auth';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma =new PrismaClient();

export const GET = auth(async function GET(req) {
    if (req.auth) {
        const email=req.auth.user?.email as string;
        const user:any=await prisma.user.findUnique({
            where:{
                email,
            }
        })
        const websites=await prisma.website.findMany({
            where:{
              userId:user.id
            }
        })
        return NextResponse.json(websites)
    }
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  })