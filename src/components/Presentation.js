import React from "react"
import {ImageBackground} from 'react-native';
import unlockYourImagination from '../assets/unlockYourImaginationLetter.png'
import monsterLogo from '../assets/scary-monster-yellow.png';

export default function Presentation (){       

    // jsx
    return(                                                                   
        <div className="flex p-10">                    
            <div className="list-group">
                <div className="flex hover:mix-blend-soft-light">
                    <img className="w-70 h-70"
                        src={unlockYourImagination}                                                                    
                    >
                    </img>  
                    <img className="w-70 h-70"
                        src={monsterLogo}
                    >
                    </img>                                  
                </div>                                                                                                                                                                             
                <div className='ml-30 text-white w-50 justify-right items-right'>
                    Making toys is a kind of way to make our mark in the world, explore different products, and pre-order whatever you want.
                    We'll be happy to realize your dreams with you and unlock the deepest areas of your imagination.
                    
                    Come change the world with us!
                </div>                             
            </div>                                                       
        </div>                                        
    );    
}