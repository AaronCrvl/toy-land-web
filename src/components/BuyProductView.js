import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import BuyerInfo from './BuyerInfo';
import Badge from 'react-bootstrap/Badge';

export default function BuyPorductView({ id, name, description, imageURL }){
    const productId = id

    //useState
    const [showBuyerInfo, setBuyerInfo] = useState(false);    
    const toggleShowA = () => setBuyerInfo(!showBuyerInfo);        

    //Styles
    const tableStyle = {
        display: 'flex',
        padding:'70px',                
        color:'#F3F3F3'
    }
    const imageStyle = {
        width: '700px',
        height: '600px',
    }
    const infoAreaStyle = {
        textAlign:'right',
        height: '100%',
    }
    const shortDescriptionStyle = {
        marginBottom: '20px',
    }

    //JSX
    return(        
        <div style={{width:'100%', height: '100vh', backgroundColor: 'rgb(88 38 38)',}}>
            <table style={tableStyle}>
                <th>                                                                
                    <td>
                        <Carousel>
                            <Carousel.Item style={imageStyle}>
                                <img
                                className="d-block w-100"
                                src={imageURL}                                 
                                alt="First slide"
                                />                               
                            </Carousel.Item>
                            <Carousel.Item style={imageStyle}>
                                <img
                                className="d-block w-100"
                                src={imageURL}                                 
                                alt="Second slide"
                                />
                            </Carousel.Item>                
                        </Carousel>                        
                    </td>
                </th>                    
                <th style={{padding:'70px'}}>
                    <td style={infoAreaStyle}>
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
                        <h4 style={{'fontVariant': 'small-caps', marginBottom:'25px', width:'450px', display:'inline-block'}}>{description}</h4>
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
                                <Button onClick={toggleShowA} className="mb-2">
                                    <strong>Buy</strong>
                                </Button>                                
                            </Col>
                        </div>
                    </td>
                </th>
                <tr>
                    <td>
                        <article className="">
                            <li style={shortDescriptionStyle}>
                                <strong>Who is this product for? </strong>
                                The target audience can be gender (i.e. male or female), an age group (i.e. college students or retirees), 
                                a lifestyle demographic (i.e. new mothers or car enthusiasts) or some other defined group of people.
                            </li>
                            <li style={shortDescriptionStyle}>
                                <strong>Who is this product for? </strong>
                                The target audience can be gender (i.e. male or female), an age group (i.e. college students or retirees), 
                                a lifestyle demographic (i.e. new mothers or car enthusiasts) or some other defined group of people.
                            </li>
                            <li style={shortDescriptionStyle}>
                                <strong>When should someone use the product? When should someone use the product? </strong>
                                Is it meant to be used during a certain time of day, seasonally or for a specific type of occasion? Just as important is pointing out if a product can or should be used every day or year-round. These details will help speak to the product’s long-term value.Is it meant to be used during a certain time of day, seasonally or for a specific 
                                type of occasion? Just as important is pointing out if a product can or should be used every day or year-round. 
                                These details will help speak to the product’s long-term value.
                            </li>
                        </article>
                    </td>
                </tr>                         
            </table>  
            {/* <div style={{marginBottom:'500px'}}>
                <BuyerInfo show='false'></BuyerInfo>
            </div>                            */}
        </div>                    
    );
}