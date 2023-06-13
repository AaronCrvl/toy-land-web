import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
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

    // jsx
    return(        
        <div>                                            
            <ul className="sticky top-0 font-medium flex font-sans font-bold text-lg flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white red:bg-red-800 md:dark:bg-red-900 red:border-red-700">
                <li className='mr-auto hover:animate-bounce'>                                            
                    <LogoNav></LogoNav>                                            
                </li>
                <li>
                    <div className="block py-2 pl-3 pr-4 text-white hover:bg-red-700 hover:rounded" aria-current="page">
                        <NavLink 
                            className="text-white no-underline"
                            to="/main"                            
                        >
                            Main                                                   
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="block py-2 pl-3 pr-4 text-white hover:bg-red-700 hover:rounded" aria-current="page">
                        <NavLink 
                            to="/products"
                            className="text-white no-underline"
                        >
                            Products                                                   
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="block py-2 pl-3 pr-4 text-white hover:bg-red-700 hover:rounded" aria-current="page">
                        <div>
                            <NavDropdown className='text-white no-underline' title="Categories" id="basic-nav-dropdown">
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
                    </div>
                </li>   
                <li style={{marginLeft: '700px'}}></li>             
                <li className='text-white'>                    
                    <Navbar.Brand 
                        onClick={navigateToAccountPage}
                    >                                                    
                        <div className='container flex p-1 hover:bg-red-700 hover:animate-pulse'>                                                      
                            <img
                                alt=""
                                src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                                width="30px"
                                height="30px"
                                className="d-inline-block align-top"                                    
                            /> 
                            {userName}
                        </div>                           
                    </Navbar.Brand>                    
                </li>                                                        
            </ul>      
            <div className='p-0 mb-0'>
                <Routes>
                    <Route exact path="/main" element={<MainPage id={idUser}/>} />
                    <Route exact path="/products" element={<ProductPage idAcct={idUser}/>} />                                           
                    <Route path="/buy" element={<BuyPage />} />
                    <Route path="/account" element={<AccountPage />} />
                </Routes>                  
            </div>                                                                                                                                                               
        </div>        
    )
}