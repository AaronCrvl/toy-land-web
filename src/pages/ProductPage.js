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
    
    // jsx
    return (
        <div className='bg-red-950 p-1'>
            {
                productList === undefined ?
                (                    
                    <div className='w-screen h-screen'>
                        <span className="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                            <p className='ml-10'>
                                Loading...
                            </p>
                        </span>                                   
                    </div>
                )
                :
                (
                    <div className='h-full' key={idAcct}>
                        <ProductGrid idAccount={idAcct} content={productList}/>
                    </div>
                )
            }
        </div>
    )
}