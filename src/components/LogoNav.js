import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import toyLandLogo from '../sources/toyland-logo.png'

export default function LogoNav(){    
    const MainLogoPath = 'https://seeklogo.com/images/S/spitfire-logo-1DD11D1CFB-seeklogo.com.png' 

    const styles = {
        letterLogoStyle : {
            width: '150px',
            height: '50px',
        }
    }

    // jsx
    return(
        <Navbar
            style={{
                left: '400px',
            }}
        >
            <Container style={{ width: 'max-content' }}>
                <Navbar.Brand>
                    <div style={{ 'display': 'flex' }}>
                        <div>
                            <div style={{ fontFamily:'"Raleway", sans-serif', color:'khaki', 'fontVariant': 'small-caps' }}>
                                <h1>
                                    <img
                                        style={styles.letterLogoStyle}
                                        src={toyLandLogo}
                                    >
                                    </img>
                                </h1>
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
    )
}