import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';

export default function LoginPage() {    
       
    // useState
    const [showClientFields, setShowClientFields] = useState(false)
    const handleLogInClick = () => {setShowClientFields(!showClientFields)}  
    
    const [showCreate, setShowCreate] = useState(false)
    const handleCreate = () => {
        handleLogInClick()
        setShowCreate(!showCreate)
    }  

    // JSX
    return(      
        <div 
            style={{
                    width: '100vh', 
                    height:'100%' ,                    
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',                                      
                }}
            >
            {                
                showClientFields ?  
                (
                    showCreate ?
                    (
                        <div>
                            <CreateAccount></CreateAccount>
                        </div>
                    )
                    :
                    (
                        <div>                                       
                            <Login></Login>
                        </div>
                    )
                )
                :
                (                               
                    <div
                        style={{
                            border: '5px solid #932432',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(0, -50%)',
                            padding: '100px',
                            marginLeft: '200px',
                            borderRadius: '25px',                                                            
                            backgroundColor: 'white' 
                        }}
                    >                                         
                        <div>                                  
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                alt=""
                                                src="https://seeklogo.com/images/S/spitfire-logo-1DD11D1CFB-seeklogo.com.png"
                                                width="30"
                                                height="30"
                                                className="d-inline-block align-top"                                        
                                            />{' '}  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Button 
                                                onClick={handleLogInClick}
                                                style={{backgroundColor:'black', 'borderColor': 'red'}}
                                            >
                                                Log On
                                            </Button>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td>
                                            <Button 
                                                onClick={handleCreate}
                                                style={{backgroundColor:'black', 'borderColor': 'red'}}
                                            >
                                                Create Account
                                            </Button>
                                        </td>
                                    </tr>                                   
                                </tbody>
                            </table>                                                                                                    
                        </div>                                              
                    </div>
                )                                                
            }
        </div>      
    );
}