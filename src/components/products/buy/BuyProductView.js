import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
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
    const closeBuyerInfoView = () => setBuyerInfo(!showBuyerInfo)

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
    return( 
        <div 
            style={{                 
                backgroundColor: 'rgb(88 38 38)',                    
            }}
        >
            {
                stock === undefined?
                (
                    <div>
                        <Spinner style={styles.spinnerStyle} animation="border" variant="warning"/>                                    
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
                            <div className='container w-full text-right p-10 items-right justify-center'>
                                <div className='text-8xl text-white p-1'>
                                    <strong>
                                        <Badge bg="danger" text="light">
                                            <strong>
                                                {name}
                                            </strong>
                                        </Badge>{' '}   
                                    </strong>
                                </div>
                                <div className='text-4xl text-white p-1'>
                                    <Badge bg="danger" text="light">
                                        <strong>
                                            Available Qtd: {stock.Qtd}
                                        </strong>
                                    </Badge>{' '} 
                                </div>
                                <div className='text-4xl text-white p-1'>
                                    <Badge bg="danger" text="light">
                                        <strong>
                                            $0,00
                                        </strong>
                                    </Badge>{' '}                                                             
                                </div>  
                                <div className='container mt-40'>                                
                                    <div className='text-2xl text-white p-1'>                                    
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
                                    <div className='text-white text-2xl ml-auto w-50 p-1'>
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