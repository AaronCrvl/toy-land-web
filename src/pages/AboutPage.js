import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function AboutPage(){
    // styles
    const spinnerStyle = {
        width:  '70vh',
        height:  '70vh',
        padding: '300px',
        marginTop:'150px',
        marginBottom:'150px',
        marginLeft:'500px',
        'text-align':'center',
    }
    
    // jsx
    return(
        <Spinner  animation="border" role="status" style={spinnerStyle}>
            <span className="visually-hidden" >Loading About Page...</span>
        </Spinner>  
    );
}