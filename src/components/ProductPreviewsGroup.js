import React, { useState } from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Spinner from 'react-bootstrap/Spinner';
import Product from "./Product"
import Button from "react-bootstrap/Button"
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function ProductPreviewsGroup({ content }){    

    //Styles
    const productsPreviewStyles = {        
        'borderTopStyle':'outset', 
        textAlign:'center'        
    }
    const PropTextStyle= {
        display: '-webkit-inline-box',
        fontSize: '50px',                  
        textAlign: 'center',        
        fontVariant: 'small-caps',
    }
    
    //JSX
    return(                            
        <div style={productsPreviewStyles}>              
            <div style={{display: 'inline-grid', textAlign:'center', 'marginTop': '35px', 'marginLeft':'80px'}}>
                <div style={{textAlign:'center'}}>
                    <p style={PropTextStyle}>
                        Staff Choices For the Month:
                    </p>
                </div>
                <div style={{display: 'inline-grid'}}>
                    <ListGroup horizontal style={{display: 'flex', 'overflow-x': 'auto'}}>                        
                            {
                                content === undefined ?
                                (
                                    <Spinner animation="border" variant="error"/>
                                )
                                :
                                (
                                    content.map((item) =>{    
                                        return(                    
                                            <ListGroupItem>
                                                <Product 
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