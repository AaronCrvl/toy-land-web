import React from 'react';
import InitialPage from './pages/WelcomePage';
import AppRouter from './routes/AppRouter';
import { RouterProvider } from 'react-router-dom';


function App() {
  // Router ------------------------------>
  const router = new AppRouter().mapRoutes()
  
  // Jsx ------------------------------>
  return (
    <div className='App'>      
        <RouterProvider router={router} />      
    </div>
  )
}

export default App;