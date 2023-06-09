import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Login from '../components/login/Login';
import CreateAccount from '../components/login/CreateAccount';

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
        <div 
            style={{
                    width: '100%',                 
                    height:'100%' ,
                    backgroundColor:'firebrick',                   
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
                            marginLeft: '40%',
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