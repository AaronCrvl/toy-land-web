import React, { useState } from "react";
import { useEffect } from "react";
import ProductController from "../controllers/ProductsController"
import Presentation from '../components/Presentation';
import ProductPreviewsGroup from '../components/products/ProductPreviewsGroup';

export default function MainPage({ id }) {     
    const [productList, setProductList] = useState()    
    const api = new ProductController() 

    // useEffect
    useEffect(() => {                               
        const response = api.GetProductsByRegisterQuantity(4)     
        response.then(data => {
            setProductList(data)                        
        })                        
    }, [])    

    //JSX
    return(
        <div>     
            <Presentation></Presentation>                         
            <ProductPreviewsGroup 
                idAccount={id} 
                content={productList}
            >
            </ProductPreviewsGroup>             
        </div>  
    );    
}