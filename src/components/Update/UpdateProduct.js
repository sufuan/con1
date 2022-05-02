// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// // load single pd 
// const UpdateProduct = () => {
//     const {id}=useParams()
//     const [updateProduct, setUpdateProduct] = useState({})
//     const [first, setFirst] = useState('')
//     const url = `http://localhost:4000/product/${id}`

//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         // console.log(data)
//         setUpdateProduct(data)
//     }) 


// //   upate  info 

//     const handleupdate = e => {
//         e.preventDefault()

//         const pdInfo={
//         nameInput:e.target.name.value,
//         priceInput: e.target.price.value
//         }


//         axios.put( `http://localhost:4000/product/${id}`, pdInfo)
//               .then(res=>console.log(res))





//             //   fetch(`http://localhost:4000/product/${id}`, {
//             //     method: 'PUT',
//             //     body: JSON.stringify({
//             //      pdInfo
//             //     }),
//             //     headers: {
//             //       'Content-type': 'application/json; charset=UTF-8',
//             //     },
//             //   })
//             //     .then((response) => response.json())
//             //     .then((json) => console.log(json));











//         console.log(pdInfo)
//         e.target.name.value = ''
//         e.target.price.value = ''

//     }

//     // useEffect(()=>{

//     //     axios.put( `http://localhost:4000/product/${id}`, {
//     //         nameInput,priceInput
//     //     })
//     //         .then((response) => {
//     //             console.log(response);
//     //         });
//     // },[id])




//     return (
//         <div>
//                 I AM UPDATE {id} <br />
//                 there is  {updateProduct.nameInput}




//             <form className='text-center' onSubmit={handleupdate}>
//                 <input className='my-4' type="text" name="name" id="name" placeholder='name' /> <br />
//                 <input className='my-4' type="text" name="price" id="price" placeholder='price' /> <br />
//                 <input type="submit" value="uoload" />
//             </form>
//         </div>
//     );
// };

// export default UpdateProduct;





import React, { useEffect, useState } from 'react';
import axios from 'axios';



const UpdateProduct = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(88)

    const [products, setProducts] = useState([])

    const [newname, setNewname] = useState('')


    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                setProducts(res.data)
                console.log(res.data);
            })
    }, [])

        ;

    const addtoList = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/uploadPd', { name, price })
            .then((response) => {
                console.log(response);
            });
    }

    const updateName = (id) => {
        console.log(name);
        // console.log(id)
        
        setPrice(price+1)

        fetch(`http://localhost:4000/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name,price:price}),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
   
    }


    return (
        <div>


            <form className='text-center' onSubmit={addtoList}>
                <input onChange={(e) => { setName(e.target.value) }} className='my-4' type="text" name="name" id="name" placeholder='name' /> <br />


                <input onChange={(e) => { setPrice(e.target.value) }} className='my-4' type="number" name="price" id="price" placeholder='price' /> <br />
                <input type="submit" value="uoload" />
            </form>

            <br /> <hr /> <br />


            {
                products.map(product => {
                    return (
                        <div className='text-center'>
                            {/* <h1 className='text-3xl text-center'>name{product.name}</h1>
                         <input onChange={(e)=>{setName(e.target.value)}}  type="text" />
                         <button onClick={()=>{updateName(product._id)}}>update</button> */}

                             <h1 className='text-3xl text-center'>price{product.price}</h1>
                            <button  onClick={()=>{updateName(product._id)}}>update</button>


                         
                         
                    </div>
                 )
             })
         }



        </div>
    );
};

export default UpdateProduct;