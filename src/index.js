import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render( 
  <div className='bg-red-800 w-full overflow-x-hidden'>
    {/* <BrowserRouter> */}
      <App/>
    {/* </BrowserRouter> */}
  </div>
)