import React from "react"
import {ImageBackground} from 'react-native';

export default function Presentation (){     
    
    //Styles
    const PresentationStyle = {
        'marginTop': '60px', 
        'background-image': "", 
    }
    const PresStyle = {    
        'textAlign': 'left',
        'marginTop': '30px', 
        'marginBottom': '30px', 
        color: '#283747',
        width: '700px'
    }   
    const PresentationTextStyle = {
        marginLeft: '400px',
        color: '#DE354C',   
        'display': 'flex'       
    }
    const ToyImage = {        
        width: '500px',
        height: '500px'
    }

    //JSX
    return(
        <ImageBackground
            source='https://i.pinimg.com/originals/03/ca/1b/03ca1bfae12314e7f66d66594bc7f140.jpg'
            style={{width: '100%', height: '100%'}}
        >             
            <div style={PresentationStyle}>                
                <div>                
                    <div style={PresentationTextStyle}>
                        <div>
                            <h1 style={{'fontSize': '100px', 'font-family': 'fantasy'}}>UNLOCK YOUR IMAGINATION</h1>                                                                                                             
                            <h3 style={{'fontSize': '100px', 'font-family': '"Raleway", sans-serif'}}>Your mind is the limit!</h3>
                            <div style={{display:'inline-flex'}}>
                            <p style={PresStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                In fermentum et sollicitudin ac orci. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.                               
                            </p>
                        </div>  
                        </div>
                            <div style={{display: 'inline-flex'}}>
                                <img
                                    src='https://www.pngall.com/wp-content/uploads/5/Lego-PNG-Pic.png'
                                    style={ToyImage}>                            
                                </img>                        
                            </div>
                        </div>                    
                </div>                              
            </div>
        </ImageBackground>
    );    
}