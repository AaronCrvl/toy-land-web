import React from "react"
import {ImageBackground} from 'react-native';
import unlockYouerImagination from '../sources/unlockYourImaginationLetter.png'

export default function Presentation (){     
    
    // styles
    const styles = {
        PresentationStyle : {
            'marginTop': '10px',                         
        },

        PresStyle : {    
            'textAlign': 'left',            
            'marginBottom': '30px', 
            color: 'white',
            width: '700px'
        },

        PresentationTextStyle : {
            padding: '10px',
            marginLeft: '400px',
            color: '#DE354C',   
            'display': 'flex'       
        },

        ToyImage : {        
            width: '500px',
            height: '500px'
        }
    }

    // jsx
    return(
        <ImageBackground
            source='https://image.slidesdocs.com/responsive-images/background/creative-black-business-red-fluid-abstract-powerpoint-background_0785289040__960_540.jpg'
            style={{width: '100%', height: '100%'}}
        >             
            <div style={styles.PresentationStyle}>                
                <div>                
                    <div style={styles.PresentationTextStyle}>
                        <div
                            style={{
                                padding: '10px',
                            }}
                        >
                            <h1><img 
                                    src={unlockYouerImagination}
                                    style={{
                                        width: '800px',
                                        height: '400px',
                                    }}
                                >
                                </img></h1>                                                                                                                                         
                            <div style={{display:'inline-flex'}}>
                            <p style={styles.PresStyle}>
                                Making toys is a kind of way to make our mark in the world, explore different products, and pre-order whatever you want.
                                We'll be happy to realize your dreams with you and unlock the deepest areas of your imagination.
                                
                                Come change the world with us!
                            </p>
                        </div>  
                        </div>
                            <div style={{display: 'inline-flex'}}>
                                <img
                                    src='https://www.pngall.com/wp-content/uploads/5/Lego-PNG-Pic.png'
                                    style={styles.ToyImage}>                            
                                </img>                        
                            </div>
                        </div>                    
                </div>                              
            </div>
        </ImageBackground>
    );    
}