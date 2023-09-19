import React from "react";
import toyLandLogo from '../assets/toyland-logo.png';
import monsterLogo from '../assets/scary-monster-white.png';
import './css/componentsCss.css';

export default function LogoNav() {        
    // Jsx ------------------------------>
    return(        
        <div className="flex items-center">        
            <img
                id='letterLogoStyle'            
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