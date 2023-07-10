import React from 'react';
import { useEffect }from 'react';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ClientCartController from '../../../controllers/ClientCartController';

export default function ClientCart({ idUser }){
    const api = new ClientCartController()

    // useState
    const [cartProducts, setCartProducts] = useState()
    
    // functions
    const getClientCartInfo = () =>{        
        let data = api.GetCartProducts(idUser)
        data.then((result)=>{
            setCartProducts(result)
        })
    }

    const removeProductFromCart = (idAccount, idProduct)  =>{
        let data = api.RemoveProductFromCart(idAccount, idProduct)
        data.then((result)=>{
            console.log(result)
            getClientCartInfo()
        })
    }

    // useEffect
    useEffect(() => {
        if(cartProducts === undefined && idUser != undefined)
        {
            getClientCartInfo()
        }
    })

    // jsx
    return(                    
        <div className='flex'>
            <div className='list overflow-y-auto bg-orange-950 p-5 w-1/2'>
                <div className='text-6xl text-white font-bold ml-2 p-2 mb-5'>Cart Products</div>
                {
                    cartProducts !== undefined ? 
                    (                                    
                        cartProducts.map((product)=> {                                           
                            return(
                                <div
                                    className='block w-full p-3'                                
                                    key={product.idProduct}    
                                >
                                    <div className='flex'>
                                        <div className='flex w-1/2'>                                            
                                            <div>                                                        
                                                <div className='h-48 w-48'><img src={product.imageUrl}></img></div>                                                        
                                            </div>        
                                            <div className='card-text text-white p-1 ml-2'>
                                                <div className='text-4xl font-semibold'>
                                                    {product.productName}
                                                </div>
                                                <div className='text-2xl font-semibold'>
                                                    ${5}
                                                </div>   
                                            </div>                                                            
                                        </div>
                                        <div className=' w-1/2'>
                                            <button 
                                                className='rounded bg-red-900 p-2 text-white hover:bg-red-700'
                                                onClick={()=>removeProductFromCart(idUser, product.idProduct)}
                                            >
                                                X
                                            </button>                                            
                                        </div>
                                    </div>
                                </div>
                            )                                        
                        })
                    )
                    :
                    (
                        <div>No items to display.</div>
                    )
                } 
                    
            </div>
            <div className='bg-orange-950 p-5 w-1/2'>
                <div>
                    <div className='text-4xl text-white font-bold'>Totals</div>
                </div>                
            </div>  
        </div>
    );
}