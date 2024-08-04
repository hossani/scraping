import React from 'react'
import { signIn } from '../../../auth';
import { redirect } from 'next/navigation';

const SigninComp = () => {
  return (
    <div className="container-login">
    <div className="div-logo-form">
        <img src='spider.png' alt="logo"/>
    </div>
    <div className="container-form-login" >
   
<form className="max-w-sm mx-auto"  action={async (formData:FormData) => {
        "use server"
        await signIn('credentials',{
email:formData.get('email') as string,
password:formData.get('password') as string,
          redirect:false,
          callbackUrl:'/'
        });
        redirect('/')
      }}>
<div className="mb-5 titre-form-div">
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white titre-form">Se connecter</label>
</div>
<div className="mb-5">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
<input type="email" name="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-green-600 dark:focus:border-green-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
</div>
<div className="mb-5">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
<input type="password" name="password"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-green-600 dark:focus:border-green-500 dark:shadow-sm-light" required />
</div>
<button type="submit" className="text-white  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-green-500">submit</button>
</form>
</div>
</div>
  )
}

export default SigninComp