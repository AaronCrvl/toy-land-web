import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Product from './Product';

export default function ProductGrid({ idAccount, content }){    

    // useState
    const [products, setProducts] = useState(content)       
        
    // styles
    const styles = {
        ContainerStyles : {
            backgroundColor: 'rgb(88 38 38)',  
            'display': 'grid',        
            width: 'max-content',        
        },

        spinnerStyle : {
            width:  '100vh',
            height:  '100vh',
            padding: '300px'
        },
        
        rowStyle: {
            backgroundColor: 'rgb(88 38 38)',  
        }
    }

    // jsx
    return (        
            <Container style={styles.ContainerStyles}>  
                <Row style={styles.rowStyle}>
                {
                    products === undefined ?
                    (
                        <Spinner style={styles.spinnerStyle} animation="border" variant="success"/>
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
    )
}