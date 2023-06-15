import React, { useState } from "react"
import Product from "./Product"

export default function ProductPreviewsGroup({ idAccount, content }){    
    const [key, setKey] = useState(0)
    const handleSetKey = () => {
        setKey(key+1)
        console.log(key)
        return key
    }

    // jsx
    return(                            
        <div className="w-screen bg-red-950 p-17">
            <div className="p-10">
                <div className="text-6xl text-white font-sans font-bold p-1">                    
                    Sugestions                
                </div>
                <div>
                    <div className="flex p-10">                        
                            {
                                content === undefined ?
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
                                    content.map((item) =>{                                                                                    
                                        return(                                                                
                                            <div key={item.idProduct} style={{padding: '25px', border: 'solid', borderColor:'firebrick', borderWidth: '1px'}}>
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
            </div>
        </div>
    );    
}