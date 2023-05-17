import React, { useState } from "react";
import { useEffect } from "react";
import ProductController from "../controllers/ProductsController";
import Presentation from '../components/Presentation';
import ProductPreviewsGroup from '../components/ProductPreviewsGroup';

export default function MainPage() {     
    const [productList, setProductList] = useState()    
    const api = new ProductController() 

    useEffect(() => {                               
        const response = api.GetProductsByRegisterQuantity(3)     
        response.then(data => {
            setProductList(data)                        
        });                        
    }, []);    

    //JSX
    return(
        <div>     
            <Presentation></Presentation>                         
            <ProductPreviewsGroup content={productList}></ProductPreviewsGroup>             
        </div>  
    );    
}