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
        spinnerStyle : {
            width:  '100vh',
            height:  '100vh',
            padding: '300px'
        },                
    }

    // jsx
    return (    
        <div className='w-full'>            
            <div className='grid grid-cols-3 gap-3 pl-80 pr-80 pt-20 pb-20'>
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
                                //key={keyCount}
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
            </div>                                           
        </div>    
    )
}