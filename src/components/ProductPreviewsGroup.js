import React, { useState } from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Spinner from 'react-bootstrap/Spinner';
import Product from "./Product"
import Button from "react-bootstrap/Button"

export default function ProductPreviewsGroup({ content }){    

    //Styles
    const productsPreviewStyles = {        
        'borderTopStyle':'outset', 
        textAlign:'center'        
    }
    
    //JSX
    return(                            
        <div style={productsPreviewStyles}>   
            {/* KeyFramesAnimation */}
            <style type="text/css">
            {`
                .PropText{
                    display: -webkit-inline-box;                    
                    font-Size: 50px;
                    font-family: fantasy;
                    text-align: center;
                    animation: mymove 5s infinite;
                }
                
                @keyframes mymove {
                    0%   {color: #DE354C;}
                    30%  {color: #932432;}
                    60%  {color: orange;}
                    85%  {color: lightyellow;}
                    100% {color: #F3F3F3;}
                }
            `}
            </style>

            <div style={{display: 'inline-grid', textAlign:'center', 'marginTop': '35px', 'marginLeft':'80px'}}>
                <div style={{textAlign:'center'}}>
                    <p className="PropText">
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
                                        <Product 
                                            id={item.idProduct}                                            
                                            name={item.productName}
                                            descripton ={item.shortDescription}
                                            imageURL={item.imageUrl}
                                        />     
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