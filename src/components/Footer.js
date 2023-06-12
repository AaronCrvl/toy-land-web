import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import LogoNav from '../components/LogoNav'

export default function Footer (){             

    // jsx
    return(
        <div className='navbar flex bg-red-800 w-full'>
            <div className='flex p-2'>
                <LogoNav></LogoNav>   
            </div>
        </div>
    ); 
}