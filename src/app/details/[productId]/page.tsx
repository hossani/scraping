import DetailsProd from '@/components/details/details'
import Sidebar from '@/components/general/sidebar'
import React from 'react'
import '../../../styles/sidebar.scss';
import { auth } from '../../../../auth';
import { redirect } from 'next/navigation';

const Details = async ({ params }: { params: { productId: string } }) => {
  const session = await auth()
  if (!session) return redirect('/signin')
    return (
   <>
   <div className="container-sidebar-dash">
    <Sidebar/>
    <DetailsProd id={params.productId}/>
    </div>
   </>
  )
}

export default Details