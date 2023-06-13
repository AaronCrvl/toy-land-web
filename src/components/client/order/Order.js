import React, { useState } from 'react';
import { useEffect } from 'react';
import ClientOrderController from '../../../controllers/ClientOrderController';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                if(data !== undefined)
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
        <div className='p-3 w-full'>
            {
                order === undefined ?
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