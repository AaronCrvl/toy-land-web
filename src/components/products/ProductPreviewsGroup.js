import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Spinner from 'react-bootstrap/Spinner';
import Product from "./Product"
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import staffChoices from '../../sources/staffChoicesLetter.png'

export default function ProductPreviewsGroup({ idAccount, content }){    

    // styles
    const styles = {
        productsPreviewStyles : {  
            backgroundColor: 'rgb(88 38 38)',     
            color: 'white',
            'borderTopStyle':'outset', 
            textAlign:'center'        
        },

        PropTextStyle : {
            display: '-webkit-inline-box',
            fontSize: '50px',                  
            textAlign: 'center',        
            fontVariant: 'small-caps',
        },

        spinnerStyle : {
            width:  '5vh',
            height:  '5vh',
            padding: '100px',
            marginTop:'10px',
            marginBottom:'10px',
            'textAlignLast':'center',
        }
    }
    
    //JSX
    return(                            
        <div style={styles.productsPreviewStyles}>              
            <div style={{textAlign:'center', 'marginTop': '35px', 'marginLeft':'80px'}}>
                <div style={{textAlign:'center', marginTop:'80px'}}>                    
                        <img 
                            src={staffChoices}
                            style={{width: '400px', height: '150px'}}
                        ></img>                    
                </div>
                <div style={{display: 'inline-grid', padding: '40px'}}>
                    <ListGroup horizontal style={{display: 'flex', ' overflowX': 'auto'}}>                        
                            {
                                content === undefined ?
                                (
                                    <div>
                                        <Spinner style={styles.spinnerStyle} animation="border" variant="warning"/>                                    
                                    </div>
                                )
                                :
                                (
                                    content.map((item) =>{    
                                        return(                    
                                            <ListGroupItem
                                                style={{
                                                    backgroundColor: 'rgb(97 46 46)',   
                                                }}
                                            >
                                                <Product 
                                                    idAcct={idAccount}
                                                    id={item.idProduct}                                            
                                                    name={item.productName}
                                                    descripton ={item.shortDescription}
                                                    imageURL={item.imageUrl}
                                                />  
                                            </ListGroupItem>   
                                        )                   
                                    })
                                )
                            }                        
                    </ListGroup>                                                          
                </div>
            </div>
        </div>
    );    
}