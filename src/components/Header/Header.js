import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='sticky top-0 bg-white px-12 py-2 flex justify-center md:justify-between'>
            <div className='hidden md:block' >
                <Link to='/' className='font-bold text-xl text-gray-600'> crypto cafe</Link>
            </div>
            <div className='flex gap-4 text-xl '>
                <Link to='/'>Home</Link>

                <Link to='/products'>products</Link>
                <Link to='/uploadPd'>Upload product</Link>

                <Link to='/updatepd'>update</Link>
                {
                    user ? <button onClick={() => signOut(auth)}>SignOut</button> : <NavLink to="/login" className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>login  </NavLink>
                }
              
            </div>
        </div>
    );
};

export default Header;