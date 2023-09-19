import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductController from '../controllers/ProductsController'
import ProductGrid from '../components/products/ProductGrid';

export default function ProductPage({ idAcct }) {                         
    const api = new ProductController()         

    // Hooks ------------------------------>
    const [productList, setProductList] = useState()        
    const [searchBoxContent, setSearchBoxContent] = useState('')
        
    useEffect(() => {   
        if(productList === undefined) {
            const response = api.GetAllProducts()     
            response.then(data => {
                setProductList(data)                        
            })
        }
    }, [productList])    
    
    const filteredProductList = searchBoxContent.length > 0 ? 
    productList.filter((product) => product.productName.includes(searchBoxContent))
    : [];

    // Jsx ------------------------------>
    return (
        <div className='bg-red-950 p-1'>
            <div className='w-screen'>
                <div className='ml-auto w-fit p-5'>                    
                    <input
                        type='text'
                        placeholder='Filter products...'
                        onChange={e => setSearchBoxContent(e.target.value)}                                                        
                        className='rounded-lg p-1'
                    />
                </div>
            </div>
            {
                productList === undefined ?
                (                    
                    <div className='w-screen h-screen'>
                        <span className="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                            <div className='ml-10'>
                                Loading...
                            </div>
                        </span>                                   
                    </div>
                )
                :
                (
                    searchBoxContent.length > 0 ?
                    (
                        <div className='h-screen' key={Math.random()}>
                            <ProductGrid idAccount={idAcct} content={filteredProductList}/>
                        </div> 
                    )
                    :
                    (
                        <div className='h-full' key={Math.random()}>
                            <ProductGrid idAccount={idAcct} content={productList}/>
                        </div> 
                    )
                )
            }
        </div>
    )
}