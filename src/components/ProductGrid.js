import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Product from './Product';

export default function ProductGrid({ content }){    

    //useStates & useEffect
    const [products, setProducts] = useState(content);         
        
    //Styles
    const ContainerStyles = {
        backgroundColor: '#F3F3F3',
        'display': 'grid',        
        width: 'max-content',
    }

    //JSX
    return (        
            <Container style={ContainerStyles}>  
                <Row>
                {
                    products === undefined ?
                    (
                        <Spinner animation="border" variant="success"/>
                    )
                    :
                    (                                 
                        products.map((item) =>{    
                            return(                    
                                <Product 
                                    id={item.idProduct}
                                    name={item.productName}
                                    descripton ={item.shortDescription}
                                    imageURL={item.imageUrl}
                                />     
                            )                   
                        })
                    )                                                           
                }  
                </Row>                                
           </Container>
    );
}