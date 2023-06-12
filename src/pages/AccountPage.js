import React, { useState } from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccountController from '../controllers/AccountController';
import Spinner from 'react-bootstrap/Spinner';
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

    // styles
    const styles = {        
        spinnerStyle : {
            width:  '100vh',
            height:  '100vh',
            padding: '300px'
        },      
    }
    
    // jsx
    return(     
        <div className='w-screen'>
            {
                account_ === undefined ?                
                (
                    // loading...
                    <div>
                        <Spinner style={styles.spinnerStyle} animation="border" variant="success"/>
                    </div>
                )
                :        
                (
                    // tab selection                                      
                    <div className='p-10'>                              
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                                <ClientAccount
                                    account={account_}
                                >                    
                                </ClientAccount>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
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