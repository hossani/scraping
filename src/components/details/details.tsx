'use client';
import React, { useEffect, useState } from 'react'
import '../../styles/dashboard.scss';
import axios from 'axios';
import { formatDate } from '@/services/formDate';
type props={
    id:string,
}
const DetailsProd = ({id}:props) => {

    const [history, setHistory] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res =await axios.get(`http://localhost:3000/api/products/${id}`);
          const data = res.data;
          setHistory(data);
        } catch (error) {
          console.error('Error fetching history of product:', error);
        }
      };
  
      fetchProducts();
    }, []);
    
  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg dashboard-class">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            History of product ID: {id}
        </caption>
        
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                        Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
              
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Buy</span>
                </th>
            </tr>
        </thead>
        <tbody>
        { !history? '':
        history.map((item:any) =>       
            
            <tr key={item.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
{item.nameProduct} </th>
 <td className="px-6 py-4">
{formatDate(item.createdAt)} </td>
 <td className="px-6 py-4">
 {item.price} </td>
 
 <td className="px-6 py-4 text-right">
     <a href={`${item.url}`} className="font-medium text-red-600 dark:text-red-500 hover:underline cursor" >Buy</a>
 </td>
</tr>
          )}  
        </tbody>
    </table>
</div>  )
}

export default DetailsProd