import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthController from '../controllers/AuthController';
import Footer from './Footer'
import NavBar from './NavBar';
import LogoNav from './LogoNav';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import textValidator from '../validation/textValidator';

export default function LoginComponent() {
    const navigate = useNavigate()
    const authApi = new AuthController()
    const textValidator_ = new textValidator()

    // useState
    const [idUser, setIdUser] = useState(-1)
    const [userName, setUsername] = useState('')
    const [logggedInUser, setLoggedInUser] = useState(false)
    const [homePage, setHomePage] = useState(false)
     
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
        document.getElementsByClassName("LoginInfo")[0].innerHTML = ''
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
                    document.getElementsByClassName("LoginInfo")[0].innerHTML = "Fail to login"            
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
            'text-align-last':'center',
        }
    }

    // jsx
    return(
        logggedInUser ?
        (            
            <div
                style={{
                    width: 'fit-content', 
                    height:'100vh' ,                    
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px',                                                 
                }}
            >
                <LogoNav></LogoNav>
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
                <div>
                    <Spinner style={styles.spinnerStyle} animation="border" variant="warning"/>                                    
                </div>
            )
            :
            (
                <div>                         
                    <Form
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
                                <h1>ToyLand</h1>
                                <p 
                                    className='LoginInfo'
                                    style={{color: 'red'}}
                                ></p>
                            </div>
                        </div>  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                We'll never share your user name with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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