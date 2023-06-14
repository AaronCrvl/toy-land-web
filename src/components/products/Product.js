import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function Product({ key, idAcct, id, name, descripton, imageURL }){  

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
        ImageStyle : {
            width: '100',
            height: '180px',
        }
    }

    // jsx
    return (
        <div className="grid p-1 w-full h-full">
            <div className='bg-red-800 hover:bg-red-700 text-white p-2 w-full h-full rounded'>
                <div className='p-5 bg-white rounded mb-2'>
                    <Card.Img variant="top" src={imageURL} style={styles.ImageStyle} />
                </div>
                <div className='container font-sans'>
                    <div className='p-3'>
                        <div className='text-4xl text-left font-bold'
                        >
                            {name}
                        </div>
                    </div>
                    <div className='p-3'>                        
                        <div className='p-1 w-auto text-left font-semibold'>
                            {descripton}
                        </div>                                                                                                    
                    </div>             
                    <div className='p-3'>
                        <div className='btn bg-danger text-white font-sans font-bold p-2 font-medium'
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