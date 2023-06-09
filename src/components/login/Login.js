import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthController from '../../controllers/AuthController';
import Footer from '../Footer';
import NavBar from '../NavBar';
import LogoNav from '../LogoNav';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import textValidator from '../../validation/textValidator';
import toyLandLetterLogo from '../../sources/toyland-logo-black.png'

export default function LoginComponent() {
    const navigate = useNavigate()
    const authApi = new AuthController()
    const textValidator_ = new textValidator()

    // useState
    const [idUser, setIdUser] = useState(-1)
    const [userName, setUsername] = useState('')
    const [loginInfo, setLoginInfo] = useState('')            
    const [homePage, setHomePage] = useState(false)
    const [logggedInUser, setLoggedInUser] = useState(false)
     
    // functions
    const navigateToMainPage = () => {        
        navigate('/main', {
            state: {
              accountId: idUser,
            }
          })        
    }        
    const handleLogged = () => {
        setLoggedInUser(!logggedInUser)    
        navigateToMainPage()    
    }    
    const navigateUserToHomePage = () => {    
        setHomePage(true)            
        let username = document.getElementsByTagName("input")[0].value
        let password = document.getElementsByTagName("input")[1].value
        // if(!textValidator_.ValidateParams(username, password))        
        //     return;    

        const response = authApi.Validate(username, password)                
        response.then(
            data=>{                
                if(data !== undefined)
                {                    
                    setIdUser(data.IdAccount)                   
                    setUsername(data.UserName)
                    handleLogged()       
                }
                else{
                    setHomePage(false)
                    setLoginInfo("Fail to login")
                }
        })                                      
    }   

    // styles
    const styles = {
        spinnerStyle : {
            width:  '5vh',
            height:  '5vh',
            padding: '100px',
            marginTop:'10px',
            marginBottom:'10px',
            'textAlignLast':'center',
        },

        loginFormStyle:{
            border: '5px solid #932432',
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            padding: '90px',
            height: '95%',
            marginLeft: '35%',
            borderRadius: '25px',                                                                
            backgroundColor: 'white'    
        },

        loggedPageStyle:{
            width: 'fit-content', 
            height:'100vh' ,                    
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',   
        },
    }

    // jsx
    return(
        logggedInUser ?
        (            
            <div
                style={styles.loggedPageStyle}
            >                
                <NavBar
                    idUser={idUser}
                    userName={userName}
                >
                </NavBar>                
                <Footer></Footer>
            </div>
        )
        :
        (
            homePage ?
            (
                <div style={styles.loginFormStyle}>
                    <Spinner style={styles.spinnerStyle} animation="border" variant="warning"/>                                    
                </div>
            )
            :
            (
                <div
                    sttle={{padding: '15px'}}
                >                         
                    <Form
                        style={styles.loginFormStyle}
                    >
                        <div>
                            <img
                                alt=""
                                src="https://seeklogo.com/images/S/spitfire-logo-1DD11D1CFB-seeklogo.com.png"
                                width="300px"
                                height="300px"
                                className="d-inline-block align-top"
                                style={{
                                    marginBottom:'40px'
                                }}
                            />
                            <div 
                                style={{ 
                                    fontFamily:'"Raleway", sans-serif', 
                                    color:'#932432', 
                                    'fontVariant': 'small-caps',
                                    marginBottom:'40px'
                                }}>
                                <h1><img src={toyLandLetterLogo}></img></h1>
                                <p                                     
                                    style={{color: 'red'}}                                
                                >
                                    {loginInfo}
                                </p>
                            </div>
                        </div>  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                TesteUser: Teste
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text>
                                TestsUserPassword:1
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button onClick={()=>navigateUserToHomePage()} 
                            variant="primary" 
                            type="button" 
                            style={{backgroundColor:'black', 'borderColor': 'red'}}>
                            Submit
                        </Button>
                    </Form>
                </div>  
            )
        )
    )
}