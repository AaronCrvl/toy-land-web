import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductController from '../controllers/ProductsController'
import ProductGrid from '../components/products/ProductGrid';

export default function ProductPage({ idAcct }){                     
    const [productList, setProductList] = useState()    
    const api = new ProductController()        

    //Funtions           
    useEffect(() => {                               
        const response = api.GetAllProducts()     
        response.then(data => {
            setProductList(data)                        
        })
    })

    // Styles    
    const ProductPageStyle = {
        backgroundColor: 'rgb(88 38 38)',  
        padding: '5px',
    }
    
    // JSX
    return (
        <div style={ProductPageStyle}>        
          {productList && <ProductGrid idAccount={idAcct} content={productList}/> }
        </div>
    );
}