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

    //JSX
    return (
        <Col style={styles.RowStyle}>            
            <table>
                <tr style={{                        
                    marginTop: '30px',
                    marginBottom: '5px',
                    merginLeft: '50px',
                    marginRight: '50px',
                }}>                                                
                    <td>
                        <Card style={styles.CardStyle}>
                            <Card.Img variant="top" src={imageURL} style={styles.ImageStyle} />
                            <Card.Body
                                style={{
                                    width: '100%'
                                }}
                            >
                                <Card.Title>
                                    <h3
                                        style={{
                                            textAlignLast: 'start',
                                        }}
                                    >
                                        {name}
                                    </h3>
                                </Card.Title>
                                <Card.Text style={{width: '250px', textAlign:'justify'}}>
                                    <p>
                                        <div>{descripton}</div>                                                                            
                                        <div>Price:<p style={{color: '#DE354C'}}>$0,00</p></div>                                        
                                    </p>                                    
                                </Card.Text>   
                                <Button 
                                    onClick={navigateBuy} 
                                    style={{
                                        backgroundColor:'red', 
                                        'borderColor': 'red', 
                                        display: 'grid'}}
                                    >
                                        See More
                                    </Button>                                
                            </Card.Body>
                        </Card>
                    </td>                        
                </tr>                   
            </table>                                   
        </Col>
    );
}