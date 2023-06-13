import React, { useState } from 'react';
import { useEffect } from 'react';
import AccountController from '../../../controllers/AccountController';
import ClientOrderController from '../../../controllers/ClientOrderController';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function BuyerInfo({ idProduct, idAccount }) {           
  const accountApi = new AccountController()
  const clientOrderApi = new ClientOrderController() 

  // useState  
  const [order, setOrder] = useState()  
  const [account, setAccount] = useState()       

  // useEffect
  useEffect(()=>{    
    if(idAccount !== -1){
      const response = accountApi.GetAccount(idAccount)
      response.then(data => {        
        if(account === undefined)
          setAccount(data)                                         
      })            
    }  
  })

  // functions
  const handleSubmit = () => {    
    if(idAccount !== undefined){
      const response = clientOrderApi.CreateProductOrder(idProduct, idAccount)
      response.then(data => {
        setOrder(data)                                         
      }) 
    }
    else
      alert("Something went wrong!")
  }  

  // jsx
  return (
    <div>
      {
        order !== undefined ?
        (  
          // order created successfully!  
          <div>
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
              <h1>{order}</h1>                 
            </div>
          </div>
        )
        :
        (
          account === undefined ?
          (
            <div className='w-screen h-screen'>
                <span class="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                    <p className='ml-10'>
                        Loading...
                    </p>
                </span>                                   
            </div>
          )
          :
          (            
            <div className="w-full text-white">                              
              <Row className="p-5 rounded grid bg-yellow-800 p-10">
                <div className='mb-10 text-4xl'>
                    <strong>Pre-Order:</strong> Fill Personal Info
                </div>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control 
                    disabled
                    readOnly                     
                    type="text"
                    placeholder="First name"
                    defaultValue={account.FirstName}
                    
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control                      
                    type="text"
                    disabled
                    readOnly
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
                      aria-describedby="inputGroupPrepend"
                      defaultValue={account.UserName}
                      required
                      disabled
                      readOnly
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" className='mb-5' controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button 
                  onClick={()=>handleSubmit()}
                  type="button" 
                  style={{ 
                      color: 'black', 
                      backgroundColor:'khaki', 
                      'borderColor': 'khaki'
                    }}
                  >
                    Pre Order
                </Button>
              </Row>                
            </div>            
          )
        )
      }    
    </div>
  );
}