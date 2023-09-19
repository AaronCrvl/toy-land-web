import React from "react"
import unlockYourImagination from '../assets/unlockYourImaginationLetter.png'
import monsterLogo from '../assets/scary-monster-yellow.png';

export default function Presentation (){       
    // Jsx ------------------------------>
    return(                                                                   
        <div className="flex w-full p-1 bg-gradient-to-r from-red-950 from-10% via-black-500 via-50% via-orange-500 via-70% to-yellow-500 to-90% hover:animate-pulse">                    
            <div className="flex p-10">                
                <img className="w-fit h-fit mt-10"
                    src={unlockYourImagination}                                                                    
                >
                </img>  
                <img className="w-fit h-fit ml-10"
                    src={monsterLogo}
                >   
                </img>                                                                                                                                                                                                                                             
            </div>                                                       
        </div>                                        
    )
}