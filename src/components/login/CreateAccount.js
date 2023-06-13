import React, { useState } from 'react';
import AccountController from '../../controllers/AccountController';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CreateAccount() {
    const api = new AccountController();
    const [validated, setValidated] = useState(false);

    // functions
    const handleSubmit = () => {                       
        let firstName = document.querySelector('#validationCustom01').value
        let lastName = document.querySelector('#validationCustom02').value        
        let password = document.querySelector('#validationCustom03').value
        let userName = document.querySelector('#validationCustomUsername').value                        
        
        const res = api.CreateNewAccount(firstName, lastName, password, userName)
        res.then((response) => {
            if(response.status === 200)
                setValidated(true)
            else
                alert('Failed to create and account.');
        })          
    }

    // jsx
    return (
        validated ? 
        (
            <div>
                <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/179/179372.png"
                    width="300px"
                    height="300px"
                    className="d-inline-block align-top"
                    style={{
                        marginBottom:'40px'
                    }}
                />
                <h1>Account Created Sucessfully</h1> 
                <Button>Log On!</Button>
            </div>
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
                <img
                    alt=""
                    src="../src/assets/scary-monster-white.png"
                    width="300px"
                    height="300px"
                    className="d-inline-block align-top"
                    style={{
                        marginBottom:'40px'
                    }}
                />
                <Form noValidate validated={validated}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"                                
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"                                
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
                            <Form.Control type="text" placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
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
                    <Button type="button" onClick={()=>handleSubmit()}>Submit form</Button>
                </Form>
            </div>
        )
    )
}