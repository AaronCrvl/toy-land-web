import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Product from "../components/Product";
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

    //JSX
    return(
        product === undefined ?
        (
            <div>
                <Spinner animation="border" variant="success"/>
                <h1>Loading Buy Page...</h1>
            </div>
        )
        :
        (                                                              
            <Product 
                id={product.Response.idProduct}
                name={product.Response.productName}
                descripton ={product.Response.shortDescription}
                imageURL={product.Response.imageUrl}
            />                
        )        
    );
}