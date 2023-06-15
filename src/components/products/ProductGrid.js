import React, { useState } from 'react';
import Product from './Product';

export default function ProductGrid({ idAccount, content }){    

    // useState    
    const [products, setProducts] = useState(content)               

    // jsx
    return (    
        <div className='w-full'>            
            <div className='h-full grid grid-cols-3 gap-3 pl-80 pr-80 pt-20 pb-20'>
            {
                products === undefined ?
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
                    products.map((item) =>{                            
                        return(        
                            <div key={item.idProduct}>                                            
                                <Product                                                             
                                    idAcct={idAccount}
                                    id={item.idProduct}
                                    name={item.productName}
                                    descripton ={item.shortDescription}
                                    imageURL={item.imageUrl}
                                />   
                            </div>                            
                        )                   
                    })
                )                                                           
            }  
            </div>                                           
        </div>    
    )
}