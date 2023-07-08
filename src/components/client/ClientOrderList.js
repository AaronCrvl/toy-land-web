import React from 'react';
import { useEffect, useState } from 'react';
import Order from './order/Order';
import ClientOrderController from '../../controllers/ClientOrderController';

export default function ClientOrderList({ idAccout }) {
    const ordersApi = new ClientOrderController()    
    const [orders, setOrders] = useState()
    const [hasOrders, setHasOrders] = useState(false)

    // useEffect
    useEffect(() => {
        if(orders === undefined)
        {
            const res = ordersApi.GetOrdersByClient(idAccout)    
            res.then(data => {
                if(data.length > 0)
                {
                    setOrders(data)
                    setHasOrders(true)
                }                
                else
                {
                    setOrders(data)
                }
            })
        }        
    })        

    // jsx        
    return(
        <div className='h-screen w-screen'>
            {
                orders === undefined ?
                (
                    <div className='w-screen h-screen'>
                        <span className="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                            <p className='ml-10'>
                                Loading...
                            </p>
                        </span>                                   
                    </div>
                )
                :
                (
                    hasOrders ?
                    (                    
                        <div className='p-5 w-full h-full '>                        
                            <div className='list-group p-10 overflow-y-scroll'>
                                {                                
                                    orders.map((order)=>{                       
                                        return(
                                            <Order
                                                key={order.idClientOrder}                     
                                                idClientOrder={order.idClientOrder}
                                                idAcct = {idAccout}
                                                idProduct={order.idProduct}
                                            ></Order>
                                        )
                                    })
                                }
                            </div>
                        </div>                 
                    )
                    :
                    (
                        <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 p-10 py-3 shadow-md" role="alert">
                            <div className="flex">
                                <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                                <div>
                                <p className="font-bold">Oops..</p>
                                <p className="text-sm">This client dont have orders yet.</p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}