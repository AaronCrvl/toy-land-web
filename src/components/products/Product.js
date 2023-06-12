import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

export default function Product({ idAcct, id, name, descripton, imageURL }){  

    // navigation 
    const navigate = useNavigate();
    const navigateBuy = () => {        
        navigate('/buy', {
            state: {
              productId: id,
              idAccount: idAcct,
            }
          });        
    }

    // styles
    const styles = {
        RowStyle : {        
            marginTop: '15px',
            marginBottom: '30px',
            merginLeft: '50px',
            marginRight: '50px',
        },

        CardStyle : {  
            backgroundColor: '#DE354C',   
            color: 'white',
            textAlign: 'right',
            padding: '20px'      ,
            marginTop: '5px',
            marginBottom: '20px',
            merginLeft: '10px',
            marginRight: '10px',
            width: '100%',  
            height: '100%',
            
        },

        ImageStyle : {
            width: '100',
            height: '180px',
        }
    }

    // jsx
    return (
        <div className="container grid p-1 w-100 h-100">
            <div className='bg-red-800 text-white p-3 rounded'>
                <div className='p-5 w-70 h-70 bg-white rounded'>
                    <Card.Img variant="top" src={imageURL} style={styles.ImageStyle} />
                </div>
                <div>
                    <div className='p-3'>
                        <div className='text-4xl text-left'
                        >
                            {name}
                        </div>
                    </div>
                    <div className='p-3'>                        
                        <div className='p-1 w-50 text-left'>
                            {descripton}
                        </div>                                                                                                    
                    </div>             
                    <div className='p-3'>
                        <div className='btn bg-primary text-white p-2'
                            onClick={navigateBuy}                        
                        >
                            See More
                        </div>                                
                    </div>    
                </div>
            </div>                                                                      
        </div>
    );
}