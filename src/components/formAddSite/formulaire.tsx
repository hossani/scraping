import React from 'react';
import '../../styles/formSite.scss';
import { addSite } from '@/actions/addSite';
import { auth } from '../../../auth';
import BtnAdd from '../button/btnAdd';
const FormulaireWeb = async () => {
const session: any = await auth() ;
const myEmail:string=session.user?.email;
  return (
<form className="form-class" action={addSite}>
  <input type='hidden' name='email' defaultValue={myEmail} />

    <h3 className="titre-formulaire">Formulaire d'ajout website</h3>
    <div className="  mb-6 ">
        <label htmlFor="websiteName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of website</label>
<input id="websiteName" name="websiteName"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Example: Amazon, Ebay ..."/>
  </div>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
        <label htmlFor="titleRef" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre ref</label>
  <select id="titleRef" name="titleRef"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 block w-full ">
    <option value="">Choose a reference</option>
    <option value="id">id</option>
    <option value="className">className</option>
    <option value="tag">tag</option>
  </select> 
  </div>
        <div>
        <label htmlFor="titleValue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title value</label>
      <input type="text"  id="titleValue" name="titleValue"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 block w-full "/>
  </div>
    
        <div>
        <label htmlFor="priceRef" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price ref</label>
  <select id="priceRef" name="priceRef" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 block w-full ">
    <option selected value="">Choose a reference</option>
    <option value="id">id</option>
    <option value="className">className</option>
    <option value="tag">tag</option>
  </select> 
  </div>
  <div>
        <label htmlFor="priceValue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price value</label>
      <input type="text"  id="priceValue" name="priceValue" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 block w-full "/>
  </div>

    </div>
    <BtnAdd/>
    </form>
  );
}

export default FormulaireWeb;
