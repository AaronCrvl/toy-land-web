import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import MainPage from '../pages/MainPage';
import ProductPage from '../pages/ProductPage';
import BuyPage from '../pages/BuyPage';
import AboutPage from '../pages/AboutPage';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            {/* KeyFramesAnimation */}
            <style type="text/css">
            {`
                .PropText{                    
                                         
                }
                
                @keyframes mymove {
                    0%   {color: #DE354C;}
                    30%  {color: #932432;}
                    60%  {color: orange;}
                    85%  {color: #DE354C;}
                    100% {color: #932432;}
                }
            `}
            </style>
            <BrowserRouter>
                <div style={RouterStyle}>                        
                        <div style={{ margin: '10px', marginLeft: '30px' }}>
                            <NavLink 
                                to="/products"
                                style={{color:  '#F3F3F3',  textDecoration: 'none'}}
                            >
                                Products                     
                            </NavLink>
                        </div>   
                        <div style={{ margin: '10px', marginLeft: '30px' }}>
                            <NavLink 
                                to="/about"
                                style={{color:  '#F3F3F3',  textDecoration: 'none'}}
                            >
                                About                     
                            </NavLink>
                        </div>    
                        <div style={{ margin: '10px', marginLeft: '30px' }}>
                            <NavDropdown style={{color:  '#F3F3F3',  textDecoration: 'none'}} title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    City
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Creator
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Heroes
                                </NavDropdown.Item>                                
                                <NavDropdown.Item href="#action/3.4">
                                    Jurassic
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>  
                        <div>
                                <Badge bg="" style={{'margin-left': '155vh', 'margin-right': '10px'}}>
                                    <img
                                        src='https://cdn3d.iconscout.com/3d/premium/thumb/basket-5590709-4652401.png'
                                        style={{height: 'auto', width:'50px', }}
                                    >
                                    </img>   
                                </Badge>{' '}                                        
                        </div>   
                    </div>
                    <Routes>
                        <Route exact path="/home" element={<MainPage />} />
                        <Route exact path="/products" element={<ProductPage />} />                     
                        <Route exact path="/about" element={<AboutPage />} />  
                        <Route path="/buy" element={<BuyPage />} />
                    </Routes>
            </BrowserRouter>            
        </div>
    );
}