import React, { useState } from "react";
import { useEffect } from "react";
import ProductController from "../controllers/ProductsController"
import Presentation from '../components/Presentation';
import ProductPreviewsGroup from '../components/products/ProductPreviewsGroup';
import BrandsView from "../components/visual/BrandsView";

export default function MainPage({ id }) {         
    const api = new ProductController() 

    // useState
    const [productList, setProductList] = useState()    

    // useEffect
    useEffect(() => {          
        if(productList === undefined){
            const response = api.GetProductsByRegisterQuantity(4)     
            response.then(data => {            
                setProductList(data)                        
            })                        
        }
    })    

    // jsx
    return(
        <div className="w-screen">     
            <Presentation/>
            <ProductPreviewsGroup 
                idAccount={id} 
                content={productList}
            />            
            <BrandsView />         
        </div>  
    );    
}