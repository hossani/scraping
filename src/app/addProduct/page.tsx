import React from 'react'
import Sidebar from '@/components/general/sidebar';
import '../../styles/sidebar.scss';
import FormProduct from '@/components/formAddProduct/formProduct';
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

const AddProd = async() => {
  const session = await auth()
  if (!session) return redirect('/signin')
    const myEmail=session.user?.email as string;
  return (
    <>
    <div className="container-sidebar-dash">
    <Sidebar/>
    <FormProduct myEmail={myEmail}/>
    </div>
    </>
  )
}

export default AddProd