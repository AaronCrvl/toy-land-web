import React from 'react';
import { useEffect, useState } from 'react';
import Order from './order/Order';
import ClientOrderController from '../../controllers/ClientOrderController';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ClientOrderList({ idAccout }) {
    const ordersApi = new ClientOrderController()    
    const [orders, setOrders] = useState()

    // useEffect
    useEffect(() => {
        if(orders === undefined)
        {
            const res = ordersApi.GetOrdersByClient(idAccout)    
            res.then(data => {
                setOrders(data)
            })
        }        
    })        

    // styles
    const styles = {
        spinnerStyle : {
            width:  '5vh',
            height:  '5vh',
            padding: '100px',
            marginTop:'10px',
            marginBottom:'10px',
            'textAlignLast':'center',
        },
        containerStyle: {
            padding: '25px',
            backgroundColor: '#582626',            
            display: 'flex',
            'minWidth': '-webkit-fill-available',
        }
    }    

    // jsx        
    return(
        <div>
            {
                orders === undefined ?
                (
                    <div>
                      <Spinner 
                            style={styles.spinnerStyle} 
                            animation="border" 
                            variant="warning"
                        />                                    
                    </div>
                )
                :
                (                    
                    <Container
                        style={styles.containerStyle}
                    >
                        <Row
                            style={{padding: '10px'}}
                        >
                            {
                                orders.map((order)=>{
                                    return(
                                        <Order
                                            idAcct = {idAccout}
                                            idProduct={order.idProduct}
                                        ></Order>
                                    )
                                })
                            }
                        </Row>
                    </Container>                 
                )
            }
        </div>
    )
}