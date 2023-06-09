import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import BuyerInfo from './BuyerInfo';
import Badge from 'react-bootstrap/Badge';
import ProductController from '../../../controllers/ProductsController';

export default function BuyPorductView({ idAcct, id, name, description, imageURL }){    
    const api = new ProductController();

    // useState
    const [stock, setStock] = useState() 
    const [showBuyerInfo, setBuyerInfo] = useState(false)                

    // useEffect
    useEffect(
        ()=>{
            const response = api.GetProductStock(id)
            response.then(data => {
                setStock(data)                                         
            }) 
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
        stock === undefined?
        (
            <div>
                <Spinner style={styles.spinnerStyle} animation="border" variant="warning"/>                                    
            </div>
        )     
        :
        (
            <div 
                style={{                 
                    backgroundColor: 'rgb(88 38 38)',                    
                }}>
                <table style={styles.tableStyle}>
                    <thead
                        style={{
                            width: 'max-content',
                        }}
                    >
                        <th>    
                            <tr>
                                <td>
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
                                </td>
                                <td style={styles.infoAreaStyle}>
                                    <h1 style={{fontSize:'70px'}}>
                                        <strong>
                                            <Badge bg="danger" text="light">
                                                <strong>
                                                    {name}
                                                </strong>
                                            </Badge>{' '}   
                                        </strong>
                                    </h1>
                                    <h2 style={{'fontVariant': 'small-caps', marginBottom:'35px'}}>
                                        <Badge bg="danger" text="light">
                                            <strong style={{fontSize:'30px'}}>
                                                $0,00
                                            </strong>
                                        </Badge>{' '}                                                             
                                    </h2>
                                    <h3>
                                        <Badge bg="danger" text="light">
                                            <strong style={{fontSize:'30px'}}>
                                                Available Qtd: {stock.Qtd}
                                            </strong>
                                        </Badge>{' '} 
                                    </h3>
                                    <h4 style={{
                                        'fontVariant': 'small-caps', 
                                        marginBottom:'25px', 
                                        width:'450px', 
                                        display:'inline-block'
                                    }}>
                                        {description}
                                    </h4>
                                    <p>
                                        <div>Don't be slow! Our prices are low.</div>
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
                                    </p>
                                    <div style={{textAlign:'-webkit-right'}}>
                                        <Col md={6} className="mb-2" style={{ display: 'grid'}}>
                                            <Button onClick={showBuyerInfoView} className="mb-2">
                                                <strong>Buy</strong>
                                            </Button>                                
                                        </Col>
                                    </div>                        
                                </td>
                            </tr>                                                                                                
                        </th>  
                    </thead>
                    <tbody
                        style={{
                            width: 'max-content',
                        }}
                    >  
                        <tr
                            style={{
                                display: 'contents',
                            }}
                        >
                            <td>
                                <div>
                                    {
                                        showBuyerInfo ?
                                        (
                                            <div>
                                                <div
                                                    style={{
                                                        padding: '10px',
                                                    }}
                                                >
                                                    <Button
                                                        variant="warning"                                                    
                                                        onClick={()=>closeBuyerInfoView()}
                                                    >
                                                        Close Pre Order View
                                                    </Button>
                                                </div>
                                                <div>                                            
                                                    <BuyerInfo
                                                        idAccount={idAcct}
                                                    ></BuyerInfo>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <div></div>
                                        )
                                    }
                                </div>  
                            </td>               
                        </tr>                                                  
                    </tbody>                                                                
                </table>                     
            </div>  
        )                       
    );
}