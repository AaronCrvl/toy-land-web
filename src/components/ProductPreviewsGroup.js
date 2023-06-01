import React, { useState } from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Spinner from 'react-bootstrap/Spinner';
import Product from "./Product"
import Button from "react-bootstrap/Button"
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function ProductPreviewsGroup({ idAccount, content }){    

    // styles
    const styles = {
        productsPreviewStyles : {  
            backgroundColor: 'white',
            'borderTopStyle':'outset', 
            textAlign:'center'        
        },

        PropTextStyle : {
            display: '-webkit-inline-box',
            fontSize: '50px',                  
            textAlign: 'center',        
            fontVariant: 'small-caps',
        },

        spinnerStyle : {
            width:  '5vh',
            height:  '5vh',
            padding: '100px',
            marginTop:'10px',
            marginBottom:'10px',
            'text-align-last':'center',
        }
    }
    
    //JSX
    return(                            
        <div style={styles.productsPreviewStyles}>              
            <div style={{display: 'inline-grid', textAlign:'center', 'marginTop': '35px', 'marginLeft':'80px'}}>
                <div style={{textAlign:'center'}}>
                    <p style={styles.PropTextStyle}>
                        Staff Choices For the Month:
                    </p>
                </div>
                <div style={{display: 'inline-grid'}}>
                    <ListGroup horizontal style={{display: 'flex', 'overflow-x': 'auto'}}>                        
                            {
                                content === undefined ?
                                (
                                    <div>
                                        <Spinner style={styles.spinnerStyle} animation="border" variant="warning"/>                                    
                                    </div>
                                )
                                :
                                (
                                    content.map((item) =>{    
                                        return(                    
                                            <ListGroupItem>
                                                <Product 
                                                    idAcct={idAccount}
                                                    id={item.idProduct}                                            
                                                    name={item.productName}
                                                    descripton ={item.shortDescription}
                                                    imageURL={item.imageUrl}
                                                />  
                                            </ListGroupItem>   
                                        )                   
                                    })
                                )
                            }                        
                    </ListGroup>                                                          
                </div>
            </div>
        </div>
    );    
}