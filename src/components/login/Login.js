import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthController from '../../controllers/AuthController';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import toyLandLetterLogo from '../../assets/toyland-logo-black.png';
import monsterLogo from '../../assets/scary-monster.png';

export default function LoginComponent() {
    const navigate = useNavigate()
    const authApi = new AuthController()    

    // Hooks ------------------------------>
    const [idUser, setIdUser] = useState(-1)
    const [userName, setUsername] = useState('')
    const [loginInfo, setLoginInfo] = useState('')            
    const [homePage, setHomePage] = useState(false)
    const [logggedInUser, setLoggedInUser] = useState(false)
     
    // Functions ------------------------------>
    const navigateToMainPage = () => {        
        navigate('/hello/main', {
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
        let form = new FormData(document.userData)
        console.log(form.forEach(a => console.log(a.name + a.caller)))
        let username = document.getElementsByTagName("input")[0].value
        let password = document.getElementsByTagName("input")[1].value
        if(username === undefined || password === undefined){
            alert('Please enter a username and password');
        }

        const response = authApi.Validate(username, password)                  
        response.then(
            data =>{                
                if(data !== undefined)
                {                    
                    setIdUser(data.IdAccount)                   
                    setUsername(data.UserName)
                    handleLogged()       
                }
                else {
                    setHomePage(false)
                    setLoginInfo("Fail to login")
                }
        })                                      
    }       

    // Jsx ------------------------------>
    return(
        <div>
            {
                logggedInUser ?
                (            
                    <React.Fragment>                
                        <NavBar className='mb-auto'
                            idUser={idUser}
                            userName={userName}
                        />                        
                        <Footer/>
                    </React.Fragment>
                )
                :
                (
                    homePage ?
                    (
                       <div className='w-screen h-screen'>
                            <span className="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                                <div className='ml-10'>
                                    Loading...
                                </div>
                            </span>                                   
                        </div>
                    )
                    :
                    (                                    
                        <div className='container bg-white rounded-lg p-10'>                           
                            <div className='flex h-30 w-30'>
                                <img
                                    className='d-inline-block align-top' 
                                    src={toyLandLetterLogo}>                                
                                </img>
                                <img
                                    alt=""
                                    width="80px"
                                    height="80px"
                                    src={monsterLogo}
                                    className="d-inline-block align-top p-1"                                    
                                />
                            </div>                                                                                            
                            <div className='p-3'> 
                                {
                                    loginInfo !== '' ?
                                    (                               
                                        <Alert variant='danger'>
                                            {loginInfo}
                                        </Alert>                                                                 
                                    )
                                    :
                                    (
                                        <div></div>
                                    )
                                }
                            </div>
                            <Form name="userData">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" />
                                    <Form.Text className="text-muted">
                                        user: Test
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    <Form.Text>
                                        password: 1
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </Form>
                            <div                                 
                                className='btn text-white bg-black flex justify-center items-center' 
                                onClick={()=>navigateUserToHomePage()} 
                                variant="primary" 
                                type="button" 
                            >
                                Submit
                            </div>
                        </div>                
                    )
                )
            }
        </div>
    );    
}