import axios from 'axios';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';

const UploadProduct = () => {
    const [user] = useAuthState(auth);


    const handleSubmit = e => {
        e.preventDefault()
        const nameInput = e.target.name.value;
        const priceInput = e.target.price.value;






        axios.post("http://localhost:4000/uploadpd", {
            nameInput, priceInput
        },
            {
                headers: {
                    'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                }
            }
        )
            .then((response) => {
                console.log(response);
            });

        console.log(nameInput, priceInput);
        e.target.name.value = ''
        e.target.price.value = ''

    }
    return (
        <div>UploadProduct

            <form className='text-center' onSubmit={handleSubmit}>
                <input className='my-4' type="text" name="name" id="name" placeholder='name' /> <br />
                <input className='my-4' type="text" name="price" id="price" placeholder='price' /> <br />
                <input type="submit" value="uoload" />
            </form>
        </div>
    )
}

export default UploadProduct