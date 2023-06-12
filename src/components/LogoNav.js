import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import toyLandLogo from '../assets/toyland-logo.png'
import monsterLogo from '../assets/scary-monster-white.png'

export default function LogoNav(){        
    const styles = {
        letterLogoStyle : {
            width: '150px',
            height: '50px',
        }
    }

    // jsx
    return(        
        <div className="flex items-center">        
            <img
                style={styles.letterLogoStyle}
                src={toyLandLogo}
            >
            </img>                    
            <img                
                src={monsterLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"                
            ></img>                
        </div>                                    
    )
}