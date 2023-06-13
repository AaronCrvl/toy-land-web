import React from 'react'
import LogoNav from '../components/LogoNav'
import gitHubLogo from '../assets/github-mark-white.svg';

export default function Footer (){             

    // jsx
    return(
        <div className='navbar flex bg-red-900 w-screen'>
            <div className='flex p-2 ml-5 hover:animate-bounce'>
                <LogoNav></LogoNav>   
            </div>
            <div className='hover:animate-bounce'>
                <a href='https://github.com/AaronCrvl/toy-land-web.git'>
                    <img className='w-50 h-50 mr-0 p-1' src={gitHubLogo} />
                </a>
            </div>
        </div>
    ); 
}