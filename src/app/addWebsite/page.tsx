
import Sidebar from '@/components/general/sidebar';
import React from 'react';
import '../../styles/sidebar.scss';
import FormulaireWeb from '@/components/formAddSite/formulaire';
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

const AddWebsite = async() => {
  const session = await auth()
  if (!session) return redirect('/signin')
    return (
    <>
    <div className="container-sidebar-dash">
    <Sidebar/>
    <FormulaireWeb/>
    </div>
    </>
  )
}

export default AddWebsite;