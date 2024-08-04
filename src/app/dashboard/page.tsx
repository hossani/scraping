import React from 'react'
import Sidebar from '@/components/general/sidebar';
import '../../styles/sidebar.scss';
import Dashboard from '@/components/dashboard/dashboard';
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';
const Dash = async () => {
  const session = await auth()
  if (!session) return redirect('/signin')
    const email=session.user?.email as string;

    return (
    <>
    <div className="container-sidebar-dash">
    <Sidebar/>
    <Dashboard email={email}/>
    </div>
    </>
  )
}

export default Dash