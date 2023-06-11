import React, { useState } from 'react';
import { useEffect } from 'react';
import ClientOrderController from '../../../controllers/ClientOrderController';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Order({ idAcct, idProduct }){
    const orderApi = new ClientOrderController()
    const [order, setOrder] = useState()   
    const [color, setColor]  = useState('darkgreen')

    // useEffect
    useEffect(() => {
        if(order === undefined)
        {
            const response = orderApi.GetClientOrder(idAcct, idProduct)
            response.then((data)=>{
                if(data != undefined)
                {
                    setOrder(data)
                    switch(data.idStatus)
                    {
                        case 1: // new
                            setColor('lightgreen')
                            break;
                        case 2: // attending
                            setColor('darkorange')
                            break;
                        case 3: // finished
                            setColor('crimson')
                            break;
                    }
                }
            })
        }        
    })

    // styles
    const styles = {
        carStyle: {
            padding: '10px',
            color: 'white',
            backgroundColor: 'firebrick',
        },
        cardHeaderStyle: {
            color: 'white',
            backgroundColor: color,
        }
    }

    // jsx
    return(
        <div
            style={{padding: '10px',}}
        >
            {
                order === undefined ?
                (
                    <div>
                    </div>
                )
                :
                (
                    <div>           
                        <Card
                            style ={styles.carStyle}
                        >
                            <Card.Header 
                                as="h5"
                                style={styles.cardHeaderStyle}
                            >
                                <strong>Order Number: </strong> {order.idClientOrder}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title><strong>Product: </strong> {order.productName} - <strong>Validation Hash Code: </strong> {order.orderHashCode}</Card.Title>
                                <Card.Text>
                                    <div><strong>Status Detail: </strong> {order.statusDetail}</div>                                    
                                </Card.Text>
                                <Button variant="warning">See Details</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    )
}