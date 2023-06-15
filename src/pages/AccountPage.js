import React, { useState } from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccountController from '../controllers/AccountController';
import ClientAccount from '../components/client/account/ClientAccount';
import ClientOrderList from '../components/client/ClientOrderList';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function AccountPage(){
    const location = useLocation()                
    const api = new AccountController()   

    // useState   
    const [id, setId] = useState(-1)
    const [account_, setAccount] = useState()                  
    
    // useEffect             
    useEffect(() => {             
        setId(location.state.accountId === undefined ? -1 : location.state.accountId)
        if(id !== -1){
            if(account_ === undefined)
            {
                const response = api.GetAccount(id)
                response.then(data => {
                    setAccount(data)                                         
                })
            }              
        }            
    })    

    // jsx
    return(     
        <div className='w-screen h-screen bg-red-900'>
            {
                account_ === undefined ?                
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
                    <div className='w-screen h-screen p-5'>                              
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3 no-underline font-bold text-xl font-sans"
                        >
                            <Tab eventKey="profile" title="Profile">
                                <ClientAccount
                                    account={account_}
                                >                    
                                </ClientAccount>
                            </Tab>
                            <Tab eventKey="orders" title="Orders" >
                                <ClientOrderList
                                    idAccout={id}
                                >                            
                                </ClientOrderList>
                            </Tab>                                  
                        </Tabs>                                                                 
                    </div>                              
                )  
            }
        </div>            
    )    
}