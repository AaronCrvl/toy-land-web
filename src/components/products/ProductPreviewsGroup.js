import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Spinner from 'react-bootstrap/Spinner';
import Product from "./Product"
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import sugestions from '../../assets/staffChoicesLetter.png'

export default function ProductPreviewsGroup({ idAccount, content }){    

    // styles
    const styles = {        
        spinnerStyle : {
            width:  '5vh',
            height:  '5vh',
            padding: '100px',
            marginTop:'10px',
            marginBottom:'10px',
            'textAlignLast':'center',
        }
    }
    
    // jsx
    return(                            
        <div className="bg-red-950 p-17">
            <div className="p-10">
                <div>                    
                        <img 
                            src={sugestions}          
                            className='p-10'                  
                        ></img>                    
                </div>
                <div>
                    <div className="flex">                        
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
                                            <div style={{padding: '25px', border: 'solid', borderColor:'firebrick', borderWidth: '1px'}}>
                                                <Product 
                                                    idAcct={idAccount}
                                                    id={item.idProduct}                                            
                                                    name={item.productName}
                                                    descripton ={item.shortDescription}
                                                    imageURL={item.imageUrl}
                                                />  
                                            </div>   
                                        )                   
                                    })
                                )
                            }                        
                    </div>                                                          
                </div>
            </div>
        </div>
    );    
}