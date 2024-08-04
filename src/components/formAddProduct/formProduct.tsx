'use client'
import React, { useEffect, useState } from 'react';
import '../../styles/formSite.scss'
import { addProd } from '@/actions/addProduct';
import axios from 'axios';
import BtnAdd from '../button/btnAdd';

type props={
  myEmail:string,
}
const FormProduct =  ({myEmail}:props) => {

  const [websites,setWebsites]=useState([]);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getWebsites');
        console.log('response data',response.data)
        setWebsites(response.data);
      } catch (error) {
        console.error('Error fetching websites', error);
      }
    };
    fetchWebsites();
  }, []
  )

  return (
<form className="form-class" action={addProd} >
<input type='hidden' name='email' defaultValue={myEmail} />
    <h3 className="titre-formulaire">Formulaire d'ajout product</h3>
 
    <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
        <label htmlFor="websiteName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of website</label>
  <select id="websiteName" name="websiteName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 block w-full ">
  <option value=''>
        Choose a website
      </option>
   {
    websites.map((website:any)=>{
  
      return(
        <option key={website.id} value={website.websiteName}>
        {website.websiteName}
      </option>
      )
    }
  )
   }
  </select> 
  </div>
        <div>
        <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL of product</label>
      <input type="text"  id="url" name="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 block w-full "/>
  </div>
      
    </div>
<BtnAdd/>
</form>
  );
}

export default FormProduct;
