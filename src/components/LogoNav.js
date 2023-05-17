import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function LogoNav(){    
    const MainLogoPath = 'https://seeklogo.com/images/S/spitfire-logo-1DD11D1CFB-seeklogo.com.png'
    const titleStyle = {
        
    }
    //Functions

    //JSX
    return(
        <Navbar bg="danger" variant="dark">
            <Container style={{ width: 'max-content' }}>
                <Navbar.Brand href="/home" >
                    <div style={{ 'display': 'flex' }}>
                        <div>
                            <div style={{ fontFamily:'"Raleway", sans-serif', color:'khaki', 'font-variant': 'small-caps' }}>
                                <h1>ToyLand</h1>
                            </div>                
                        </div>
                        <div>
                            <img
                                alt=""
                                src={MainLogoPath}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                style={{'marginTop': '10px'}}
                            />{' '}                   
                        </div>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}