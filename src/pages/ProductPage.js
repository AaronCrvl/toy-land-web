import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductController from '../controllers/ProductsController'
import ProductGrid from '../components/products/ProductGrid';

export default function ProductPage({ idAcct }){                         
    const api = new ProductController()        

    // useState
    const [productList, setProductList] = useState()    

    // functions
    useEffect(() => {   
        if(productList === undefined){
            const response = api.GetAllProducts()     
            response.then(data => {
                setProductList(data)                        
            })
        }
    })

    // styles 
    const styles = {      

        spinnerStyle : {
            width:  '5vh',
            height:  '5vh',
            padding: '100px',
            marginTop:'10px',
            marginBottom:'10px',
            'textAlignLast':'center',
        },
    }       
    
    // jsx
    return (
        <div className='bg-red-950 p-1 w-screen'>
            {
                productList === undefined ?
                (
                    <div>
                    </div>
                )
                :
                (
                    <div>
                        <ProductGrid idAccount={idAcct} content={productList}/>
                    </div>
                )
            }
        </div>
    )
}