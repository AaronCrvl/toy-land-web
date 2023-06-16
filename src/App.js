import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';

export default function App() {      
  const [info, setInfo] = useState(true)
  const handleCloseInfo = () =>{
    setInfo(false)
  }

  return (
    <div className="App w-screen h-screen">
      <header/>
      <div>
        {
          info ?
          (
            <div className=''>                          
              <div id="defaultModal" tabindex="-1" aria-hidden="false" className="ml-auto p-10 place-content-center">
                  <div className="w-full max-w-2xl max-h-full content-center">
                      {/* <!-- Modal content --> */}
                      <div className="bg-red rounded-lg shadow dark:bg-gray-700 justify-center items-center content-center">
                          {/* <!-- Modal header --> */}
                          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  {/* Terms of Service */} Attention !
                              </h3>
                              <button 
                                type="button" 
                                className="animate-bounce text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                                data-modal-hide="defaultModal"
                                onClick={()=>handleCloseInfo()}                                
                              >
                                <p className='text-medium'>(close modal to open app)</p>
                                  <svg aria-hidden="false" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                  <span className="sr-only">Close modal</span>
                              </button>
                          </div>
                          {/* <!-- Modal body --> */}
                          <div className="p-6 space-y-6">
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  To run this app in the web, first you  need to make sure to have this <a href={'//www.github.com/AaronCrvl/toy-land-api'} target="_blank" rel="noopener noreferrer">api project</a> running in your machine.
                              </p>                         
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  While running you need to make sure to disable your browser or application adblocking for api call purposes, Axios returns net::ERR_BLOCKED_BY_CLIENT when ad blocker is active.
                              </p>                         
                          </div>                                           
                      </div>
                  </div>
              </div>
            </div>
          )
          :
          (
            <LoginPage />
          )
        }
      </div>      
    </div>
  )
}