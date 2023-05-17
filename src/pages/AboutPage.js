import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function AboutPage(){
    return(
        <Spinner  animation="border" role="status">
            <span className="visually-hidden" >Loading About Page...</span>
        </Spinner>  
    );
}