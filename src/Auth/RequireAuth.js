import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../components/firebase.init';
import Loading from '../components/Loading/loading';

const RequireAuth = ({children}) => {
    // const [user,loading] =useAuthState(auth)
    const [user, loading,] = useAuthState(auth);
    const location= useLocation()


    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children

   
};

export default RequireAuth;