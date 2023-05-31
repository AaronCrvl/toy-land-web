import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';

export default function Footer (){    
    //Style
    const FooterStyle = {
        backgroundColor: '#932432',    
        width: '100%',
        height : '60px',        
        display: 'inline-block',    
    }

    // JSX
    return(
        <div style={FooterStyle}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://seeklogo.com/images/S/spitfire-logo-1DD11D1CFB-seeklogo.com.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}                        
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    ); 
}