import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MainPage from '../pages/MainPage';
import ProductPage from '../pages/ProductPage';
import BuyPage from '../pages/BuyPage';
import AccountPage from '../pages/AccountPage';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import LogoNav from './LogoNav';

export default function NavBar({ idUser, userName }){              
    const navigate = useNavigate()

    // navigation     
    const navigateToAccountPage = () => {        
        navigate('/account', {
            state: {
              accountId: idUser,
            }
        })        
    }

    // styles   
    const styles = {
        RouterStyle : {        
            display: "flex",
            backgroundColor: '#932432',
            padding: '5px 0 5px 5px',
            fontSize: '20px',               
        }       
    }       

    // jsx
    return(        
        <div>                                    
            <div style={styles.RouterStyle}>                        
                     <div style={{ margin: '10px', marginLeft: '30px' }}>
                        <NavLink 
                            to="/main"
                            style={{color:  '#F3F3F3',  textDecoration: 'none'}}
                        >
                            Main                                                   
                        </NavLink>
                    </div>   
                    <div style={{ margin: '10px', marginLeft: '30px' }}>
                        <NavLink 
                            to="/products"
                            style={{color:  '#F3F3F3',  textDecoration: 'none'}}
                        >
                            Products                                                   
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
                    <div
                        style={{
                            height: '80px',
                        }}
                    >
                        <LogoNav></LogoNav>
                    </div>
                    <div
                        style={{ marginLeft: '100vh', color: 'white'}}
                    >
                        <Container
                            style={{
                                marginTop: '10px',
                                marginRight: '20px',
                            }}
                        >
                            <Navbar.Brand 
                                onClick={navigateToAccountPage}
                            >
                                <img
                                    alt=""
                                    src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"                                    
                                />                                
                                {userName}
                            </Navbar.Brand>
                        </Container>
                    </div>                         
                </div>
                <Routes>
                    <Route exact path="/main" element={<MainPage id={idUser}/>} />
                    <Route exact path="/products" element={<ProductPage idAcct={idUser}/>} />                                           
                    <Route path="/buy" element={<BuyPage />} />
                    <Route path="/account" element={<AccountPage />} />
                </Routes>                  
        </div>
    )
}