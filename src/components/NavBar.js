import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import MainPage from '../pages/MainPage';
import ProductPage from '../pages/ProductPage';
import BuyPage from '../pages/BuyPage';
import AccountPage from '../pages/AccountPage';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import LogoNav from './LogoNav';
import ClientCartController from '../controllers/ClientCartController';

export default function NavBar({ idUser, userName }){              
    const navigate = useNavigate()        
    const [cartCount, setCartCount] = useState() 
    const [cartProducts, setCartProducts] = useState()
    const api = new ClientCartController()

    // Navigation ------------------------------>
    const navigateToAccountPage = () => {             
        navigate('/hello/account', {
            state: {
              accountId: idUser,
            }
        })        
    }        

    // Hooks ------------------------------>
    useEffect(()=>{
        // setInterval(()=>{
            if(cartCount === undefined)
            {
                let data = api.GetCartCount(idUser)
                data.then((result)=>{
                    setCartCount(result)
                })         
            }

            if(cartProducts === undefined)
            {
                let data = api.GetCartProducts(idUser)
                data.then((result)=>{
                    setCartProducts(result)
                })         
            }
        // }, 1800000) // 1/2 hour
    })

    // Functions ------------------------------>
    function updateCartInfo () {
        {
            let data = api.GetCartCount(idUser)
            data.then((result)=>{
                setCartCount(result)
            })         
        }
        
        {
            let data = api.GetCartProducts(idUser)
            data.then((result)=>{
                setCartProducts(result)
            })         
        }
    }

    function removeProductFromCart (idAccount, idProduct) {
        let data = api.RemoveProductFromCart(idAccount, idProduct)
        data.then((result)=>{
            console.log(result)
            updateCartInfo()
        })
    }

    // Jsx ------------------------------>
    return(        
        <div>                                            
            <ul className="sticky top-0 font-medium flex font-sans font-bold text-lg flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white red:bg-red-800 md:dark:bg-red-900 red:border-red-700">
                <li className='mr-auto hover:animate-bounce'>                                            
                    <LogoNav></LogoNav>                                            
                </li>
                <li>
                    <div className="block py-2 pl-3 pr-4 text-white font-semibold hover:bg-red-700 hover:rounded" aria-current="page">
                        <NavLink 
                            className="text-white no-underline"
                            to="/hello/main"                            
                        >
                            Main                                                   
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="block py-2 pl-3 pr-4 text-white font-semibold hover:bg-red-700 hover:rounded" aria-current="page">
                        <NavLink 
                            to="/hello/products"
                            className="text-white no-underline"
                        >
                            Products                                                   
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className="block py-2 pl-3 pr-4 text-white font-semibold hover:bg-red-700 hover:rounded" aria-current="page">
                        <React.Fragment>
                            <NavDropdown className='text-white no-underline' title="Categories" id="basic-nav-dropdown" disabled>                                
                            </NavDropdown>
                        </React.Fragment>
                    </div>
                </li>   
                <li style={{marginLeft: '700px'}}></li>             
                <li className='text-white'>                    
                    <div className='flex'>                                                    
                        <button 
                            className='container rounded flex p-1 hover:animate-pulse hover:bg-red-700'
                        >                                                      
                            <div className='text-lg rounded p-1 mr-1 text-white bg-red-500'>
                                {cartCount === 0 ? '' : cartCount}
                            </div>
                            <img
                                alt=""
                                src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                                width="30px"
                                height="30px"
                                className="d-inline-block align-top mr-3"                                    
                            /> 
                        </button>  
                        <NavDropdown>
                            <div>
                                <button 
                                    className='w-full bg-red-700 text-white hover:bg-red-500'
                                    onClick={navigateToAccountPage}
                                >
                                    Go To Cart
                                </button>
                                <button 
                                    className='w-full bg-orange-700 text-white mb-2 hover:bg-orange-500'
                                    onClick={()=>updateCartInfo()}
                                >
                                    Refresh
                                </button>
                            {
                                cartProducts !== undefined ? 
                                (                                    
                                    cartProducts.map((product)=> {                                           
                                        return(
                                            <NavDropdown.Item
                                                key={product.idProduct}
                                            >
                                                <div className='flex '>
                                                    <div className='w-1/2'>                                            
                                                        <React.Fragment>
                                                            <div className='h-12 w-12'><img src={product.imageUrl}></img></div>                                                        
                                                        </React.Fragment>        
                                                        <div className='card-text p-1'>{product.productName}</div>                                                            
                                                    </div>
                                                    <div className=' w-1/2'>
                                                        <button 
                                                            className='rounded bg-red-900 p-2 text-white hover:bg-red-700'
                                                            onClick={()=>removeProductFromCart(idUser, product.idProduct)}
                                                        >
                                                            X
                                                        </button>                                            
                                                    </div>
                                                </div>
                                            </NavDropdown.Item>
                                        )                                        
                                    })
                                )
                                :
                                (
                                    <NavDropdown.Item>No items to display.</NavDropdown.Item>
                                )
                            }
                            </div>
                        </NavDropdown>    
                        <button 
                            className='rounded p-1 mt-1 hover:bg-red-700'
                            onClick={navigateToAccountPage}
                        >
                            {userName}
                        </button>                                                           
                    </div>                    
                </li>                                                        
            </ul>      
            <div className='p-0 mb-auto'>
                <Routes>
                    <Route exact path="/hello/main" element={<MainPage id={idUser}/>} />
                    <Route exact path="/hello/products" element={<ProductPage idAcct={idUser}/>} />                                           
                    <Route exact path="/hello/buy" element={<BuyPage />} />
                    <Route exact path="/hello/account" element={<AccountPage />} />
                </Routes>                  
            </div>                                                                                                                                                               
        </div>        
    )
}