import React, { useState } from 'react';
import { useEffect } from 'react';
import ClientOrderController from '../../../controllers/ClientOrderController';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Order({ idAcct, idProduct }){
    const orderApi = new ClientOrderController()
    const [order, setOrder] = useState()    

    // useEffect
    useEffect(() => {
        const response = orderApi.getOrder(idAcct, idProduct)
        response.then((data)=>{
            if(data != undefined)
            {
                setOrder(data)
            }
        })
    })

    // jsx
    return(
        order === undefined ?
        (
            <div>
            </div>
        )
        :
        (
            <div>
                <Card>
                    <Card.Header as="h5">Order Number:{order.idOrder}</Card.Header>
                    <Card.Body>
                        <Card.Title>Product: {order.productName} - Email: {order.email}</Card.Title>
                        <Card.Text>
                            The product is was ordered and it will be shipped to {order.location}.
                        </Card.Text>
                        <Button variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    )
}