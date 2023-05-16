import React, { useState } from "react";
import { useEffect } from "react";
import ProductController from "../controllers/ProductsController";
import Presentation from './Presentation';
import ProductPreviewsGroup from './ProductPreviewsGroup';
import SimplifiedContactPage from './SimplifiedContactPage';

export default function MainPageContent() {     
    const [productList, setProductList] = useState()    
    const api = new ProductController() 

    useEffect(() => {                               
        const response = api.GetProductsByRegisterQuantity(3)     
        response.then(data => {
            setProductList(data)                        
        });                        
    }, []);

    //Styles
    const MainPageStyle = {
        backgroundColor: '#F3F3F3'
    }

    //JSX
    return(
        <div id='MainPageContent'>     
            <Presentation></Presentation>                         
            <ProductPreviewsGroup content={productList}></ProductPreviewsGroup>
            <SimplifiedContactPage></SimplifiedContactPage>
        </div>  
    );    
}