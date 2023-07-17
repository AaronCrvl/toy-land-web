import React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import AccountController from '../../../controllers/AccountController'; 

export default function ClientAccount({ account }){
    const [validated, setValidated] = useState(false) 
    const [clientInfo, setClientInfo] = useState('')     
    const apiAccount = new AccountController()

    // functions
    const handleSave = () => {
        let firstName = document.querySelector('#validationCustom01').value
        let lastName = document.querySelector('#validationCustom02').value        
        let password = document.querySelector('#validationCustom03').value
        let userName = document.querySelector('#validationCustomUsername').value  

        const res = apiAccount.AlterAccount(account.IdAccount, firstName, lastName, userName, password)
        res.then((response) => {            
                setValidated(true)            
        }).catch(err =>{
            setValidated(true)
            setClientInfo('Error: ' + err.response.data)
        }) 
    } 
    const reset = () => {
        setValidated(false)
        setClientInfo('')
    }  

    // jsx
    return(
        validated ? 
        (
            clientInfo === '' ?
            (
                // success updating account!
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 p-10 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                        <div className="font-bold">Profile updated sucessfully on our system.</div>                          
                        <div className='btn bg-success text-white' onClick={()=>reset()}>Retry</div>              
                        </div>
                    </div>
                </div>
            )
            :
            (
                // a problem happened
                <div className="bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 p-10 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg className="fill-current h-6 w-6 text-orange  -500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                        <div className="font-bold">Error!</div>
                        <div className="text-sm">{clientInfo}</div>
                        <div className='btn bg-danger text-white' onClick={()=>reset()}>Retry</div>              
                        </div>
                    </div>
                </div>
            )
        )
        :
        (
            <div className='p-5 overflow-y-scroll bg-red-900'>                              
                <div className='container w-screen text-white'                   
                    // noValidate validated={validated}
                >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue={account.FirstName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue={account.LastName}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>  
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                type="text"
                                placeholder="Username"
                                defaultValue={account.UserName}
                                aria-describedby="inputGroupPrepend"
                                required
                                />
                                <Form.Control.Feedback type="invalid">
                                Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Password" 
                                defaultValue={account.Password}
                                required />                        
                        </Form.Group>                    
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <div className='btn bg-black text-white' 
                        type="button" 
                        onClick={()=>handleSave()}
                    >
                        Save
                    </div>
                </div>
            </div>
        )
    );    
}