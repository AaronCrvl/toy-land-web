import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Product from './Product';

export default function ProductGrid({ idAccount, content }){    

    //useStates & useEffect
    const [products, setProducts] = useState(content);         
        
    //Styles
    const ContainerStyles = {
        backgroundColor: 'rgb(228 228 228)',
        'display': 'grid',        
        width: 'max-content',
        marginTop:'15px'
    }
    const spinnerStyle = {
        width:  '100vh',
        height:  '100vh',
        padding: '300px'
    }

    //JSX
    return (        
            <Container style={ContainerStyles}>  
                <Row>
                {
                    products === undefined ?
                    (
                        <Spinner style={spinnerStyle} animation="border" variant="success"/>
                    )
                    :
                    (                                 
                        products.map((item) =>{    
                            return(                    
                                <Product 
                                    idAcct={idAccount}
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