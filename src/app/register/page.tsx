import React from 'react'
import RegisterComp from '@/components/registerComp/register'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'

const Register =async () => {
  const session= await auth();
  if(session) {
    redirect('/dashboard')
  }
  return (
    <>
    <RegisterComp/>
    </>
  )
}

export default Register