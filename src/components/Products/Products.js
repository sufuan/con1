import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom'
import SinglePd from '../SinglePd'

const Products = () => {

  const [products, setproducts] = useState([])

  useEffect(() => {
    // fetch('http://localhost:4000/products')
   const {data} =  axios.get('http://localhost:4000/products',{
     headers:{
       authorization:`Bearer ${localStorage.getItem("accessToken")}`
     }
   })
      // .then(res => res.json())
      .then(data =>{
        console.log(data.data)
        setproducts(data.data)
      })
      
  }, [])


  const handleDelete = (id) => {
    const confirmDelete = window.confirm('wannna delete?')
    if (confirmDelete) {
      console.log(id);

    const url= `http://localhost:4000/products/${id}`
    fetch(url, {
      method:"DELETE",

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        console.log('deleted');
        const remaining = products.filter(product=>product._id !== id)
        setproducts(remaining)
      }
    })










    }
  }

  return (
    <div >Products


      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>

            {
              products.map(product => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {product.nameInput}
                    </th>


                    <td class="px-6 py-4">
                      {product.priceInput}
                    </td>
                    <td class="px-6 py-4 text-right">
                    <Link to={`/updatepd/${product._id}`} className="font-medium text-red-600  hover:underline">delete</Link >
                      
                    <button onClick={() => handleDelete(product._id)} className="font-medium mx-2 text-blue-600  hover:underline">delete</button> 
                     
                    </td>
                  </tr>

                )
              })
            }

          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Products