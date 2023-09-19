import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import './css/pagesCss.css'

export default function AboutPage(){            
    // Jsx ------------------------------>
    return(
        <Spinner id='Spinner' animation="border" role="status" style={spinnerStyle}>
            <span className="visually-hidden" >Loading About Page...</span>
        </Spinner>  
    )
}