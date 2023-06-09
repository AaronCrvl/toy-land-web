import React, { useState } from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccountController from '../controllers/AccountController';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function AccountPage(){
    const location = useLocation()                
    const api = new AccountController()   

    // useState
    const [account, setAccount] = useState()        
    const [validated, setValidated] = useState(false)           
    
    // useEffect             
    useEffect(() => {             
        let Id = location.state.accountId === undefined ? -1 : location.state.accountId                          
        if(Id !== -1){
            const response = api.GetAccount(Id)
            response.then(data => {
                setAccount(data)                                         
            })            
        }            
    }, [])

    // functions
    const handleSave = () => {
        let firstName = document.querySelector('#validationCustom01').value
        let lastName = document.querySelector('#validationCustom02').value        
        let password = document.querySelector('#validationCustom03').value
        let userName = document.querySelector('#validationCustomUsername').value  

        const res = api.AlterAccount(account.IdAccount, firstName, lastName, userName, password)
        res.then((response) => {
            if(response.status === 200)
                setValidated(true)
            else
                alert('Failed to update account.');
        })  
    }

    // styles
    const styles = {
        accountDivStyle: {
            padding: '100px',                                                                                          
            backgroundColor: 'white'   
        },
        spinnerStyle : {
            width:  '100vh',
            height:  '100vh',
            padding: '300px'
        },      
        accountDivImageStyle:{           
            textAlignLast: 'center',
        },
        accountimageStyle:{
            marginBottom:'40px',
            border: 'outset',
            padding: '10px',
        },
        formStyle:{
            padding: '10px',
        }
    }
    
    // jsx
    return(
        validated ? 
        (
            // success updating account!
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
                <h1>Account Updated Sucessfully</h1>                 
            </div>
        )
        :
        (
            account === undefined ?                
            (
                //loading...
                <div>
                    <Spinner style={styles.spinnerStyle} animation="border" variant="success"/>
                </div>
            )
            :        
            (
                <div
                    style={styles.accountDivStyle}
                >
                    <div
                        style={styles.accountDivImageStyle}
                    >
                        <img
                            alt=""
                            src="https://seeklogo.com/images/S/spitfire-logo-1DD11D1CFB-seeklogo.com.png"
                            width="200px"                        
                            height="200px"
                            marginLeft="200px"
                            className="d-inline-block align-top"     
                            style={styles.accountimageStyle}                       
                        />
                    </div>
                    <Form 
                        styles={styles.formStyle}
                        noValidate validated={validated}
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
                        <Button 
                            type="button" 
                            onClick={()=>handleSave()}
                        >
                            Save
                        </Button>
                    </Form>
                </div>
            )            
        )
    )
}