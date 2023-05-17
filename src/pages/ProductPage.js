import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductController from '../controllers/ProductsController'
import ProductGrid from '../components/ProductGrid';

export default function ProductPage(){                     
    const [productList, setProductList] = useState()    
    const api = new ProductController()        

    //Funtions           
    useEffect(() => {                               
        const response = api.GetAllProducts()     
        response.then(data => {
            setProductList(data)                        
        });                        
    }, []);

    // Styles    
    const ProductPageStyle = {
        backgroundColor: '#F3F3F3'
    }
    
    // JSX
    return (
        <div style={ProductPageStyle}>        
          {productList && <ProductGrid content={productList}/> }
        </div>
    );
}