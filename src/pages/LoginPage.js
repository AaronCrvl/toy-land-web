import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Login from '../components/login/Login';
import CreateAccount from '../components/login/CreateAccount';
import monsterLogo from '../assets/scary-monster.png'

export default function LoginPage() {    
       
    // useState
    const [showClientFields, setShowClientFields] = useState(false)        
    const [showCreate, setShowCreate] = useState(false)

    // functions
    const handleLogInClick = () => {setShowClientFields(!showClientFields)}  
        
    const handleCreate = () => {
        handleLogInClick()
        setShowCreate(!showCreate)
    }  

    // jsx
    return(      
        <div className='flex h-screen w-screen items-center justify-center'>
            {                
                showClientFields ?  
                (
                    showCreate ?
                    (
                        <div className='m-auto flex items-center justify-center'>
                            <CreateAccount></CreateAccount>
                        </div>
                    )
                    :
                    (
                        <div className='m-auto flex items-center justify-center'>                                       
                            <Login></Login>
                        </div>
                    )
                )
                :
                (                    
                    <div className='w-50%'>           
                        <div className='container rounded bg-white p-10 flex items-center justify-center'>                                                                                       
                            <div>                                
                                <div>
                                    <div className='p-3'>
                                        <img
                                            alt=""
                                            src={monsterLogo}
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"                                        
                                        />{' '}  
                                    </div>
                                </div>
                                <div className='p-1'>                                
                                    <div className='btn bg-black text-white'
                                        onClick={handleLogInClick}                                            
                                    >
                                        Log On
                                    </div>                                
                                </div>  
                                <div className='p-1'>                                
                                    <div className='btn bg-black text-white'
                                        onClick={handleCreate}                                                
                                    >
                                        Create Account
                                    </div>                                
                                </div>                                                                   
                            </div>                                                                                                                                                                    
                        </div>
                    </div>
                )                                                
            }
        </div>      
    );
}