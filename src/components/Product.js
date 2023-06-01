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
            width: '150px',
            height: '150px',
        }
    }

    //JSX
    return (
        <Col style={styles.RowStyle}>
            <Card style={styles.CardStyle}>
                <table style={{display: 'grid'}}>
                    <tr style={{
                        marginTop: '30px',
                        marginBottom: '5px',
                        merginLeft: '50px',
                        marginRight: '50px',
                    }}>
                        <td>
                            <Card.Img variant="top" src={imageURL} style={styles.ImageStyle} />
                        </td>
                        <td>
                            <Card.Body style={{display: 'grid',}}>
                                <Card.Title>
                                    <h3>
                                        {name}
                                    </h3>
                                </Card.Title>
                                <Card.Text style={{width: '140px', textAlign:'justify'}}>
                                    <p>
                                        {descripton}
                                    </p>
                                </Card.Text>   
                                <h2 style={{color: '#DE354C'}}>
                                    Price:
                                    <p style={{color: '#DE354C'}}>$0,00</p>                             
                                </h2>
                            </Card.Body>
                        </td>                        
                    </tr>
                    <tr style={{
                        marginTop: '30px',
                        marginBottom: '5px',
                        merginLeft: '50px',
                        marginRight: '50px',
                        display: 'contents',
                    }}>
                        <Button onClick={navigateBuy} style={{backgroundColor:'red', 'borderColor': 'red'}}>See More</Button>
                    </tr>
                </table>
            </Card>                            
        </Col>
    );
}