import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BuyProductView from "../components/products/buy/BuyProductView";
import ProductController from "../controllers/ProductsController";

export default function BuyPage(){    
    const location = useLocation()
    const api = new ProductController()         

    // Hooks ------------------------------>
    const [product, setProduct] = useState()    
    const [account, setAccount] = useState(-1)            
    
    useEffect(() => {               
        if(product === undefined)
        {
            let IdProduct = location.state.productId === undefined ? 1 : location.state.productId                      
            let IdAccount = location.state.idAccount === undefined ? 1 : location.state.idAccount    
            const response = api.GetProductById(IdProduct)     
            response.then(data => {
                setProduct(data)     
                setAccount(IdAccount)                   
            })                        
        }
    })  

    // Jsx ------------------------------>
    return(
        <div className='w-screen h-screen'>        
            {     
                product === undefined ?
                (
                    <div className='w-screen h-screen'>
                        <div className="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                            <span className='ml-10'>Loading...</span>
                        </div>                                   
                    </div>
                )
                :
                (          
                    <div className="w-full h-full">
                        <BuyProductView 
                            idAcct = {account}
                            id={product.Response.idProduct}
                            name={product.Response.productName}
                            description={product.Response.shortDescription}
                            imageURL={product.Response.imageUrl}
                        />   
                    </div>                                                                 
                )  
            }
        </div>      
    )   
}