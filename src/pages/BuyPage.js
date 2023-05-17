import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import BuyProductView from "../components/BuyProductView";
import ProductController from "../controllers/ProductsController";

export default function BuyPage(){
    const location = useLocation();            
    const [product, setProduct] = useState()    
    const api = new ProductController()        

    //Funtions           
    useEffect(() => {       
        let Id = location.state.productId === undefined ? 1 : location.state.productId                      
        const response = api.GetProductById(Id)     
        response.then(data => {
            setProduct(data)                        
        });                        
    }, []);   

    //Styles
    const spinnerStyle = {
        width:  '100vh',
        height:  '100vh',
        padding: '300px'
    }

    //JSX
    return(
        product === undefined ?
        (
            <div>
                <Spinner style={spinnerStyle} animation="border" variant="success"/>
                <h1>Loading Buy Page...</h1>
            </div>
        )
        :
        (          
            <div style={{width:'100%', height:'100vh'}}>
                <BuyProductView 
                    id={product.Response.idProduct}
                    name={product.Response.productName}
                    description={product.Response.shortDescription}
                    imageURL={product.Response.imageUrl}
                />   
            </div>                                                                 
        )        
    );
}