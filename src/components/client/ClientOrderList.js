import React from 'react';
import { useEffect, useState } from 'react';
import Order from './order/Order';
import ClientOrderController from '../../controllers/ClientOrderController';

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

    // jsx        
    return(
        <div>
            {
                orders === undefined ?
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
                    <div className='p-5 overflow-y-scroll bg-red-900'>                        
                        <div className='list-group'>
                            {
                                orders.map((order)=>{
                                    return(
                                        <Order
                                            key={idAccout}                     
                                            idAcct = {idAccout}
                                            idProduct={order.idProduct}
                                        ></Order>
                                    )
                                })
                            }
                        </div>
                    </div>                 
                )
            }
        </div>
    )
}