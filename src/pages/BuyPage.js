import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BuyProductView from "../components/products/buy/BuyProductView";
import ProductController from "../controllers/ProductsController";

export default function BuyPage(){    
    const location = useLocation()
    const api = new ProductController()         

    // useState
    const [product, setProduct] = useState()    
    const [account, setAccount] = useState(-1)            

    // functions           
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

    // jsx
    return(
        <div
            style={{                 
                backgroundColor: 'rgb(88 38 38)',            
            }}>   
        {     
            product === undefined ?
            (
                <div className='w-screen h-screen'>
                    <span class="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                        <p className='ml-10'>
                            Loading...
                        </p>
                    </span>                                   
                </div>
            )
            :
            (          
                <div className="w-screen">
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
    );    
}