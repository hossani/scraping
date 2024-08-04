import Link from 'next/link'
import React from 'react'
import { signOut } from '../../../auth'
import { redirect } from 'next/navigation'

const LinkNotConnected = () => {
  return (
    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    <li>
      <Link
        href="/"
        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        href="/addWebsite"
        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        My account
      </Link>
    </li>
    <li>
      <Link
        href="/vip"
        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Premium
      </Link>
    </li>
    <li>
  
      <form
        action={async () => {
          "use server"
          await signOut();
          redirect('/')
        }}>
        <button type='submit'
         className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
      </form>
    </li>
  </ul>
  )
}

export default LinkNotConnected