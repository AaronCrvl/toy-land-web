import React, {usestate} from 'react';
import { useEffect } from 'react';
import Order from './Order';
import ClientOrderController from '../controllers/ClientOrderController';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ClientOrderList({ idAccout }) {
    const ordersApi = new ClientOrderController()    
    const [orders, setOrders] = useState(0)

    // useEffect
    useEffect(() => {
        const res = ordersApi.GetClientOrders(idAccout)    
        res.then(data => {
            setOrders(data)
        })
    })        

    // styles
    const styles = {
        spinnerStyle : {
            width:  '5vh',
            height:  '5vh',
            padding: '100px',
            marginTop:'10px',
            marginBottom:'10px',
            'text-align-last':'center',
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
                    <div>
                        <Container>
                            <Row>
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
                    </div>
                )
            }
        </div>
    )
}