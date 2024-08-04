'use server';
import { PrismaClient } from '@prisma/client';
 import { redirect } from 'next/navigation';
import {hash} from 'bcryptjs';

const prisma=new PrismaClient;

const register= async (formData:FormData)=>{
 const firstName=formData.get('firstName') as string;
 const lastName=formData.get('lastName') as string;
 const email=formData.get('email') as string;
 const password=formData.get('password') as string;

if(!firstName|| !lastName|| !email|| !password){
    throw new Error('Please fill all fields');
}
const existingUser=await prisma.user.findUnique({
where:{
    email,
}
})
if(existingUser){
    throw new Error('User, already exist')
}
const hashPassword= await hash(password,10)
await prisma.user.create({
    data:{
        firstName,lastName,email,password:hashPassword
    }
})
redirect('/signin');
}


export {register};