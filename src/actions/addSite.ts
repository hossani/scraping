'use server';
 import { redirect } from 'next/navigation';
    import { PrismaClient } from '@prisma/client';
    const prisma = new PrismaClient();
    
const addSite= async (formData:FormData)=>{
        const websiteName=formData.get('websiteName') as string;
        const titleRef=formData.get('titleRef') as string;
        const titleValue=formData.get('titleValue') as string;
        const priceRef=formData.get('priceRef') as string;
        const priceValue=formData.get('priceValue') as string;
        const email=formData.get('email') as string;
        const existingWebsite=await prisma.website.findFirst({
          where:{
            websiteName
          }
        })
        if(existingWebsite){
          console.log('Alert: Produit already exist');
          return redirect('/addWebsite');
        }

        const user:any = await prisma.user.findUnique({
            where: { email },
          });
          await prisma.website.create({
            data: {
              websiteName,
              titleRef,
              titleValue,
              priceRef,
              priceValue,
              userId: user.id,
            },
          })  ;

       redirect('/addProduct');

}


export {addSite};