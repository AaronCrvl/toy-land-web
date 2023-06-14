import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BuyerInfo from './BuyerInfo';
import Badge from 'react-bootstrap/Badge';
import ProductController from '../../../controllers/ProductsController';

export default function BuyProductView({ idAcct, id, name, description, imageURL }){    
    const api = new ProductController()

    // useState
    const [stock, setStock] = useState() 
    const [showBuyerInfo, setBuyerInfo] = useState(false)                

    // useEffect
    useEffect(
        ()=>{
            if(stock === undefined){
                const response = api.GetProductStock(id)
                response.then(data => {                
                    setStock(data)                                         
                }) 
            }
        }
    )

    // functions
    const showBuyerInfoView = () => setBuyerInfo(!showBuyerInfo)     

    // styles
    const styles = {
        tableStyle : {
            display: 'list-item',        
            padding:'70px',                
            color:'#F3F3F3'
        },

        imageStyle : {
            width: '700px',
            height: '600px',
        },

        infoAreaStyle : {
            textAlign:'right',        
            padding: '150px',
        },
    }

    // jsx
    return( 
        <div 
            style={{                 
                backgroundColor: 'rgb(88 38 38)',                    
            }}
        >
            {
                stock === undefined?
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
                                    <div className='text-white text-2xl text-left justify-left items-left w-50 p-1'>
                                        {description}
                                    </div>
                                    <div className='p-1'>
                                        <div 
                                            onClick={showBuyerInfoView} 
                                            className="btn bg-primary text-white mb-2"
                                        >
                                            <strong>Buy</strong>
                                        </div>                                                                
                                    </div> 
                                </div>                                                 
                            </div>                            
                        </div>    
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
                )       
            }
        </div>                  
    );
}