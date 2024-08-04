import NextAuth, { CredentialsSignin } from "next-auth"
 import Credentials from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
const prisma=new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
    
      authorize: async (credentials) :Promise<any> => {
const email=credentials.email as string | undefined;
const password=credentials.password as string | undefined;
if(!email || !password) {
  throw new CredentialsSignin('Please provide both email && password')
}
const user= await prisma.user.findUnique({
  where:{
    email
  }
});
if(!user){
  throw new Error('Invalid email or password')
}
if(!user.password){
  throw new Error('Invalid email or password')

}
const isMatch= await compare(password,user.password);
if(!isMatch){
  throw new Error('password did not match email or password')
}

const userData={

  email:user.email,
  password:user.password,
}

 return userData;

    },
  }  )
    
  ]
})