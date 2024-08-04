'use server';
 import { redirect } from 'next/navigation';
    import { PrismaClient } from '@prisma/client';
    const prisma = new PrismaClient();
    
const updateFree= async (formData:FormData)=>{
        const email=formData.get('email') as string;

       await prisma.user.update({
            where: { email },
            data:{
                freemium:true,
            }
          });

       redirect('/addProduct');

}


export {updateFree};