import WelcomePage from "../pages/WelcomePage";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import BuyPage from "../pages/BuyPage";
import AccountPage from "../pages/AccountPage";
import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class AppRouter {       
    mapRoutes () {
      return createBrowserRouter([
        {    
            element: <WelcomePage />,              
            path: "*",
            children: [ 
                {
                    path: "hello",
                    element: <Navbar />,                                   
                    children : [
                        {
                            path: "main",
                            element: <MainPage />,                                   
                        },
                        {
                            path: "*",
                            element: <ProductPage />,                                                                                          
                        },
                        {
                            path: "*",
                            element: <BuyPage />,                                                                           
                        },
                        {
                            path: "*",
                            element: <AccountPage />,                                                                                 
                        },
                    ]
                },                                                                                                                 
            ],
        },
    ])}
  
    constructor () {}
}