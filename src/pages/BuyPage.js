import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import BuyProductView from "../components/products/buy/BuyProductView";
import ProductController from "../controllers/ProductsController";

export default function BuyPage(){    
    const location = useLocation()
    const api = new ProductController()         

    // useState
    const [product, setProduct] = useState()    
    const [account, setAccount] = useState(-1)            

    // functions           
    useEffect(() => {               
        if(product === undefined)
        {
            let IdProduct = location.state.productId === undefined ? 1 : location.state.productId                      
            let IdAccount = location.state.idAccount === undefined ? 1 : location.state.idAccount    
            const response = api.GetProductById(IdProduct)     
            response.then(data => {
                setProduct(data)     
                setAccount(IdAccount)                   
            })                        
        }
    })  

    // styles
    const spinnerStyle = {
        width:  '70vh',
        height:  '70vh',
        padding: '300px',
        marginTop:'150px',
        marginBottom:'150px',
        'textAlignLast':'center',
    }

    // jsx
    return(
        <div
            style={{                 
                backgroundColor: 'rgb(88 38 38)',            
            }}>   
        {     
            product === undefined ?
            (
                <div>
                    <Spinner style={spinnerStyle} animation="border" variant="warning"/>
                    <h1>Loading Buy Page...</h1>
                </div>
            )
            :
            (          
                <div className="w-screen">
                    <BuyProductView 
                        idAcct = {account}
                        id={product.Response.idProduct}
                        name={product.Response.productName}
                        description={product.Response.shortDescription}
                        imageURL={product.Response.imageUrl}
                    />   
                </div>                                                                 
            )  
        }
        </div>      
    );    
}