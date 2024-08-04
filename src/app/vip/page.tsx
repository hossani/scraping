import React from 'react'
import '../../styles/vip.scss';
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';
import { updateFree } from '@/actions/updateFreemium';
const Vip = async() => {
    const session = await auth()
    if (!session) return redirect('/signin');
    const email=session.user?.email as string;

  return (
<section className="bg-white dark:bg-gray-900 vip container-vip">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Change your account to VIP</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Upgrade to VIP status for exclusive benefits and enhanced features. Enjoy priority support, special discounts, and a premium experience tailored just for you.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
           <form action={updateFree}>
            <input type='hidden' name='email' defaultValue={email} />
            <button type='submit' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 btn-vip">
                VIP Account
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
           
            </form>
        </div>
    </div>
</section>
  )
}

export default Vip