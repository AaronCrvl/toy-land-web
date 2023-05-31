import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import AccountController from '../controllers/AccountController';
import ClientOrderController from '../controllers/ClientOrderController';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function BuyerInfo({ idProduct, idAccount }) {
  const location = useLocation()                
  const accountApi = new AccountController()
  const clientOrderApi = new ClientOrderController() 
  const [account, setAccount] = useState()   
  const [order, setOrder] = useState()  
  const [validated, setValidated] = useState(false);

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

  // useEffect
  useEffect(()=>{    
    if(idAccount !== -1){
      const response = accountApi.GetAccount(idAccount)
      response.then(data => {
        setAccount(data)                                         
      })            
    }  
  },[])

  // styles
  const spinnerStyle = {
    width:  '5vh',
    height:  '5vh',
    padding: '100px',
    marginTop:'10px',
    marginBottom:'10px',
    'text-align-last':'center',
  }

  // jsx
  return (
    order !== undefined ?
    (
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
          <h1>Order Created Sucessfully</h1>                 
        </div>
      </div>
    )
    :
    (
      account === undefined ?
      (
        <div>
          <Spinner style={spinnerStyle} animation="border" variant="warning"/>                                    
        </div>
      )
      :
      (
        <div>
          <Form 
            noValidate validated={validated} 
            onSubmit={handleSubmit} 
            style={{
              color: 'white', 
              backgroundColor:'rgb(159 71 71)',             
              width:'auto', 
              padding: '80px',
            }}
          >
            <h1 
              style={{
                fontFamily: 'Roboto',
                marginBottom: '30px'
              }}>
                <strong>Pre-Order:</strong> Fill Personal Info
            </h1>
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
                    aria-describedby="inputGroupPrepend"
                    defaultValue={account.UserName}
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
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
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
            <Button 
              type="button" 
              style={{ 
                color: 'black', 
                backgroundColor:'khaki', 
                'borderColor': 'khaki'
                }}>Pre Order
            </Button>
          </Form>
        </div>
      )
    )
  );
}