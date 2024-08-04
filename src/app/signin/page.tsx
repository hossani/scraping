
import SigninComp from '@/components/signinComp/signin'
import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation';
const Signin = async() => {
  const session= await auth();
  if(session) {
    redirect('/dashboard')
  }
  return (
    <>
    <SigninComp/>
    </>
  )
}

export default Signin