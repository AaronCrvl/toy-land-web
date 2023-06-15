import React, { useState } from 'react';
import { useEffect } from 'react';
import AccountController from '../../../controllers/AccountController';
import ClientOrderController from '../../../controllers/ClientOrderController';

export default function ({ idProduct, idAccount }) {           
  const accountApi = new AccountController()
  const clientOrderApi = new ClientOrderController() 

  // useState  
  const [order, setOrder] = useState()  
  const [clientInfo, setClientInfo] = useState('')
  const [account, setAccount] = useState()       

  // useEffect
  useEffect(()=>{    
    if(idAccount !== -1){
      const response = accountApi.GetAccount(idAccount)
      response.then(data => {        
        if(account === undefined)
          setAccount(data)                                         
      })            
    }  
  })

  // functions
  const handleSubmit = () => {    
    if(idAccount !== undefined)
    {
      let email = (document.querySelector("#grid-email").value.trim() === undefined ? "" : document.querySelector("#grid-email").value)
      let city = (document.querySelector("#grid-city").value.trim() === undefined ? "" : document.querySelector("#grid-city").value)
      let state = (document.querySelector("#grid-state").value.trim() === undefined ? "" : document.querySelector("#grid-state").value)
      let zip =  (document.querySelector("#grid-zip").value.trim() === undefined ? "" : document.querySelector("#grid-zip").value)

      if(email !== "" && city !== "" && state !== "" && zip !== "")
      {
        let location = `${city} - ${state} / Zip: ${zip}`
        const response = clientOrderApi.CreateProductOrder(idProduct, idAccount, email, location)    
        response.then(data => {              
            setOrder(data)             
        }).catch(err =>{
          setOrder('') 
          setClientInfo('Error: ' + err.response.data)
        }) 
      }  
      else{
        alert("Please fill all fields before submit.")
      }    
    }
    else{
      alert("Something went wrong! Try to log in again!")
    }
  }  

  // jsx
  return (
    <div>
      {
        order !== undefined ?
        (         
          clientInfo === '' ?
          (   
            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 p-10 py-3 shadow-md" role="alert">
              <div className="flex">
                  <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                  <p className="font-bold">Order created sucessfully on our system.</p>
                  <p className="text-sm">Make sure to check your account order status at the account page for more info and status.</p>
                  </div>
              </div>
            </div>
          )
          :
          (
            <div className="bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 p-10 py-3 shadow-md" role="alert">
              <div className="flex">
                  <div className="py-1"><svg className="fill-current h-6 w-6 text-orange  -500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                  <p className="font-bold">Error!</p>
                  <p className="text-sm">{clientInfo}</p>
                  </div>
              </div>
            </div>
          )
        )
        :
        (
          account === undefined ?
          (
            <div className='w-screen h-screen'>
                <span className="relative flex w-10 h-70 mt-80 ml-auto mr-auto text-center justify-center items-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-10 w-10 bg-rose-500"></span>
                    <p className='ml-10'>
                        Loading...
                    </p>
                </span>                                   
            </div>
          )
          :
          (            
            <form className="w-screen p-40 bg-yellow-950 text-white font-sans rounded">
              <p className='text-4xl text-white font-bold mb-10'>Pre Order</p>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-first-name">
                    First Name
                  </label>
                  <input 
                    className="text-black text-lg appearance-none block w-full bg-black-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" 
                    id="grid-first-name" 
                    type="text"                     
                    readOnly
                    disabled
                    value={account.FirstName}                
                  ></input>
                  <p className="text-yellow-500 text-xl italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-last-name">
                    Last Name
                  </label>
                  <input 
                    className="text-black text-lg appearance-none block w-full bg-black-200 text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" 
                    id="grid-last-name" 
                    type="text"                     
                    readOnly
                    disabled
                    value={account.LastName}     
                  ></input>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-password">
                    Password
                  </label>
                  <input 
                    className="appearance-none block w-full bg-black-200 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-password" 
                    type="password"                     
                    readOnly
                    disabled
                    value={account.Password} 
                  ></input>
                  <p className="text-yellow-600 text-xl italic">Make it as long and as crazy as you'd like</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-password">
                    Email
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-email" 
                    type="email"     
                    required                                                        
                    placeholder="toyland@gmail.com"
                  ></input>                  
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-city">
                    City
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-city" 
                    type="text" 
                    required
                    placeholder="Albuquerque"
                ></input>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-city">
                    State
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-state" 
                    type="text" 
                    required
                    placeholder='New Mexico'                    
                  ></input>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2" for="grid-zip">
                    Zip
                  </label>
                  <input 
                    className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-zip" 
                    type="text" 
                    required
                    placeholder="90210"></input>
                </div>
              </div>
              <div 
                className='btn mt-10 bg-danger text-white hover:bounce p-10'
                onClick={()=>handleSubmit()}
              >
                Send!
              </div>
            </form>         
          )
        )
      }    
    </div>
  );
}