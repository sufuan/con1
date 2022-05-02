import React from 'react'
import { auth } from '../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);



const handlegoogle=()=>{
  signInWithGoogle()
}


let navigate = useNavigate();
let location = useLocation();

let from = location.state?.from?.pathname || "/";


if(user){
  

 const url ='http://localhost:4000/login'
 console.log(url);

 fetch(url, {
  method: 'POST',
  body: JSON.stringify({
      email: user.email
  }),
  headers: {
      'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
   .then(data=>{
   
    console.log(data);

   })
  
     
      
   
}

  return (
    <div className='text-center'>
        <button onClick={handlegoogle} className='py-10'>google sign</button>
    </div>
  )
}

export default Login