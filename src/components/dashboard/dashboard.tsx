'use client';
import React, { useEffect, useState } from 'react'
import '../../styles/dashboard.scss'
import axios from 'axios';
import Link from 'next/link';
type props={
    email:string,
}
const Dashboard = ({email}:props) => {

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res =await axios.post('http://localhost:3000/api/products',{email});
          const data = res.data;
          console.log("afficher",data);
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
 
  
    const handleDelete = async (id:number) => {
      try {
        await axios.delete(`http://localhost:3000/api/deleteProd/${id}`);
        setProducts(products.filter((product:any) => product.id !== Number(id) ));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg dashboard-class">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            All products
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">In the table, you will find all the products that have been scraped.</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                        Site
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>


        { !products? '':
        products.map((product:any) =>       
            <>
                  <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.nameProduct}
              </th>
              <td className="px-6 py-4">{product.websiteName}</td>
              <td className="px-6 py-4">{product.initalPrice }</td>
              <td className="px-6 py-4 text-green-600 dark:text-blue-500 hover:underline">
                <Link href={`/details/${product.id}`} className='cursor-pointer'>Details</Link>
              </td>
              <td className="px-6 py-4 text-right">
                <div onClick={() => handleDelete(product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Delete</div>
              </td>
            </tr>
            </>
            
                    
          )}           
        </tbody>
    </table>
</div>  )
}

export default Dashboard