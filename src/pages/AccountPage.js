import React, { useState } from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccountController from '../controllers/AccountController';
import Spinner from 'react-bootstrap/Spinner';
import ClientAccount from '../components/client/account/ClientAccount';
import ClientOrderList from '../components/client/ClientOrderList';
import Nav from 'react-bootstrap/Nav';

export default function AccountPage(){
    const location = useLocation()                
    const api = new AccountController()   

    // useState   
    const [id, setId] = useState(-1)
    const [account_, setAccount] = useState()                 
    const [isTabAccount, setisTabAccount] = useState(true)   
    const [isHover1, setHover1] = useState()
    const [isHover2, setHover2] = useState()
    
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

    // functions
    const handleTabChange = (tab) => 
    {
        if(tab === 1 && isTabAccount !== true)
            setisTabAccount(true)
        if(tab === 2 && isTabAccount !== false)
            setisTabAccount(false)
    }
    const handleHover1 = () =>{
        setHover1(!isHover1)
    }
    const handleHover2 = () =>{
        setHover2(!isHover2)
    }

    // styles
    const styles = {        
        spinnerStyle : {
            width:  '100vh',
            height:  '100vh',
            padding: '300px'
        },   
        
        tabAccountStyle : {
            padding: '15px',
            borderBottom: 'solid',
            borderBottomColor: (isTabAccount ? 'white': 'rgb(88 38 38)'),
            color: (isHover1 ? 'black': 'white'),
            backgroundColor: (isHover1 ? '#ffff10': 'rgb(88 38 38)'),
        },

        tabOrdersStyle : {
            padding: '15px',
            borderBottom: 'solid',
            borderBottomColor: (!isTabAccount ? 'white': 'rgb(88 38 38)'),
            color: (isHover2 ? 'black': 'white'),
            backgroundColor: (isHover2 ? '#ffff10': 'rgb(88 38 38)'),
        }
    }
    
    // jsx
    return(       
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
            <div>
                <div
                    style={{
                        borderTop: 'ridge',
                        borderTopColor: '#ffff10',
                        backgroundColor: '#932432',
                    }}
                >
                    <table
                        style={{
                            display: 'grid',
                            color: 'white',
                        }}
                    >
                        <thead
                            style={{
                                display: 'flex'
                            }}
                        >
                            <tr
                                style={styles.tabAccountStyle}                                
                                onClick={()=>handleTabChange(1)}
                                onMouseEnter={()=>handleHover1()}
                                onMouseLeave={()=>handleHover1()}
                            >
                                <td> Account </td>
                            </tr>
                            <tr
                                style={styles.tabOrdersStyle}
                                onClick={()=>handleTabChange(2)}
                                onMouseEnter={()=>handleHover2()}
                                onMouseLeave={()=>handleHover2()}
                            >
                                <td> Orders </td>
                            </tr>
                        </thead>
                    </table>
                </div>                    
                <div>  
                    {                  
                        isTabAccount ?
                        (
                            <ClientAccount
                                account={account_}
                            >                    
                            </ClientAccount>
                        )
                        :
                        (
                            <ClientOrderList
                                idAccout={id}
                            >                            
                            </ClientOrderList>
                        )
                    }
                </div>
            </div>
            
        )            
    )    
}