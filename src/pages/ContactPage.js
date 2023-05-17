import React from "react"
import Spinner from 'react-bootstrap/Spinner';

export default function ContactPage() {       
    return (
        <Spinner  animation="border" role="status">
            <span className="visually-hidden" >Loading Contact Page...</span>
        </Spinner>      
    )
}