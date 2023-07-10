import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import BuyerInfo from './BuyerInfo';
import Badge from 'react-bootstrap/Badge';
import ProductController from '../../../controllers/ProductsController';
import ClientCartController from '../../../controllers/ClientCartController';

export default function BuyProductView({ idAcct, id, name, description, imageURL }){    
    const api = new ProductController()
    const cartApi = new ClientCartController()
    const navigate = new useNavigate()
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    // useState
    const [stock, setStock] = useState() 
    const [showBuyerInfo, setBuyerInfo] = useState(false)                

    // useEffect
    useEffect(
        ()=>{
            if(stock === undefined){
                try{
                    const response = api.GetProductStock(id)
                    response.then(data => {                
                        setStock(data)                                         
                    }) 
                }
                catch(e){
                    console.error(e)
                }
            }
        }
    )

    // functions
    const showBuyerInfoView = () => setBuyerInfo(!showBuyerInfo)     
    const addProductToCart = ()=> {
        let data = cartApi.StoreInCart(idAcct, id)
        setIsAddedToCart(!isAddedToCart)

        // data.then((result) =>{
        //     console.log(result)
        //     setTimeout(navigateToProductPage, 10000)
        // })
    }

    const navigateToProductPage = () => {
        navigate('/products', {
            state: {
              accountId: idAcct,
            }
        }) 
    }

    // styles
    const styles = {    
        imageStyle : {
            width: '700px',
            height: '600px',
        },
    }

    // jsx
    return( 
        <div className='bg-red-950 w-screen h-screen'>
            {
                stock === undefined?
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
                    <div>
                        <div className='flex p-10 w-full'>
                            <div className='p-10'>
                                <Carousel>
                                    <Carousel.Item style={styles.imageStyle}>
                                        <img
                                            className="d-block w-100"
                                            src={imageURL}                                 
                                            alt="First slide"
                                        />                               
                                    </Carousel.Item>
                                    <Carousel.Item style={styles.imageStyle}>
                                        <img
                                            className="d-block w-100"
                                            src={imageURL}                                 
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>                
                                </Carousel>                        
                            </div>
                            <div className='w-full'>
                            </div>
                            <div className='w-screen text-left mr-auto p-10 items-left justify-left'>
                                <div className='text-8xl text-white p-1 mb-4'>
                                    <strong>                                    
                                            <strong>
                                                {name}
                                            </strong>                                        
                                    </strong>
                                </div>
                                <div className='text-4xl text-white p-1 mb-2'>                                    
                                        <strong>
                                            In stock: {stock.Qtd}
                                        </strong>                                    
                                </div>
                                <div className='text-4xl text-white p-1'>                                    
                                        <strong>
                                            $0,00
                                        </strong>                                
                                </div>  
                                <div className='container mt-20'>                                
                                    <div className='text-2xl text-white p-1 mb-1'>                                    
                                        <div>
                                            <Badge bg="primary">
                                                Free Shipping
                                            </Badge>{' '}
                                            <Badge bg="secondary">
                                                12x On Credit Card
                                            </Badge>{' '}
                                            <Badge bg="success">
                                                Great Feedback
                                            </Badge>{' '}                               
                                        </div>                            
                                    </div>
                                    <div className='text-white text-2xl text-left justify-left items-left w-full p-1'>
                                        {description}
                                    </div>
                                    <div className='p-1 mt-10 items-center justify-center'>
                                        {
                                            isAddedToCart ?
                                            (
                                                <div>
                                                    <div class="bg-indigo-900 text-center py-4 lg:px-4">
                                                    <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none animate-pulse lg:rounded-full flex lg:inline-flex" role="alert">
                                                        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Done!</span>
                                                        <span class="font-semibold mr-2 text-left flex-auto">Product added to cart, see others products on our page.</span>
                                                        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                                    </div>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <div>
                                                    <button 
                                                        className='rounded p-3 bg-sky-500 text-lg text-white font-semibold w-1/2 hover:bg-sky-700'
                                                        onClick={showBuyerInfoView}                                             
                                                    >
                                                        Pre Order
                                                    </button>               
                                                    <button 
                                                        className='rounded p-3 bg-orange-500 text-lg text-white font-semibold w-1/2 hover:bg-orange-700'
                                                        onClick={addProductToCart}                                             
                                                    >
                                                        Add to Cart
                                                    </button>   
                                                </div>
                                            )
                                        }
                                    </div> 
                                </div>                                                 
                            </div>                            
                        </div>                                              
                    </div>                                                
                )       
            }
            <div>
                {
                    showBuyerInfo ?
                    (                                                              
                        <BuyerInfo
                            idAccount={idAcct}
                            idProduct={id}
                        ></BuyerInfo>                                           
                    )
                    :
                    (
                        <div></div>
                    )
                }  
            </div>           
        </div>                  
    );
}