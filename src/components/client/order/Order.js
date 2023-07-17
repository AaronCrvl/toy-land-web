import React, { useState } from 'react';
import { useEffect } from 'react';
import ClientOrderController from '../../../controllers/ClientOrderController';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Order({ idClientOrder, idAcct, idProduct }){
    const orderApi = new ClientOrderController()
    const [order, setOrder] = useState()   
    const [color, setColor]  = useState('darkgreen')

    // useEffect
    useEffect(() => {
        if(order === undefined)
        {
            const response = orderApi.GetClientOrder(idClientOrder)
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
                                    <div><strong>Location: </strong> {order.location}</div>                                    
                                    <div><strong>Email: </strong> {order.email}</div>                                    
                                </Card.Text>                                
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>
    )
}