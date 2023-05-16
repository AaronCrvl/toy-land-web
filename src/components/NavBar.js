import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import MainPageContent from './MainPageContent';
import AboutPage from '../pages/AboutPage'
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import BuyPage from '../pages/BuyPage';

export default function NavBar(){          
    //Styles
    const MainLogoPath = 'https://seeklogo.com/images/S/spitfire-logo-1DD11D1CFB-seeklogo.com.png'
    const RouterStyle = {        
        display: "flex",
        backgroundColor: '#932432',
        padding: '5px 0 5px 5px',
        fontSize: '20px',        
    }           

    //HTML
    return(
        <div>
            <BrowserRouter>
                <div style={RouterStyle}>
                        <div style={{marginLeft: '400px'}}>
                            <NavLink 
                                to="/"
                                style={{ color: 'white', textDecoration: 'none' }}                                
                            >
                                {
                                    <Navbar.Brand href="#home">
                                        <img
                                            alt=""
                                            src={MainLogoPath}
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-top"
                                            style={{'marginTop': '10px'}}
                                        />{' '}                                    
                                    </Navbar.Brand>   
                                }
                            </NavLink>                             
                        </div>
                        <div style={{ margin: '10px', marginLeft: '30px' }}>
                            <NavLink 
                                to="/products"
                                style={{color:  '#F3F3F3',  textDecoration: 'none'}}
                            >
                                <h3>Products</h3>                                
                            </NavLink>
                        </div>
                        <div style={{ margin: '10px', marginLeft: '30px'  }}>
                            <NavLink 
                                to="/about"
                                style={{color:  '#F3F3F3',  textDecoration: 'none'}}
                            >
                                <h3>About</h3>                                
                            </NavLink>
                        </div>
                        <div style={{ margin: '10px', marginLeft: '30px'  }}>
                            <NavLink 
                                to="/contact"                                
                                style={{color:  '#F3F3F3',  textDecoration: 'none'}}                                
                            >
                                <h3>Contact</h3>                                
                            </NavLink>
                        </div>
                    </div>
                    <Routes>
                        <Route exact path="/" element={<MainPageContent />} />
                        <Route exact path="/products" element={<ProductPage />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route exact path="/contact"element={<ContactPage />} />
                        <Route path="/buy" element={<BuyPage />} />
                    </Routes>
            </BrowserRouter>            
        </div>
    );
}