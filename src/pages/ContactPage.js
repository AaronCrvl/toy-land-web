import React from "react"
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ContactPage() {    
    //
    let index = 1            
    const selectedThemes = []
    const themes = {    
        type: ['Séries', 'Filmes', 'Documentários', 'Animações'],
        duration:['Meia Hora', '1 Hora', '+ 1 Hora'],    
        category:['Ação', 'Drama', 'Romance', 'Suspense', 'Terror'],    
    }
    const [isHover1, setIsHover1] = useState(false);   
    const [isHover2, setIsHover2] = useState(false);   
    const [loadMatch, setLoad] = useState(true);  

    //Styles
    const MainBlockStyle={
        width: '100%px',
        height: '100%px',
        'marginTop':'70px',
        'marginLeft':'70px',
        'marginRight':'70px',        
    }
    const TableStyle={        
        width: '100%',
        height: '800px',        
        'marginTop': '50px',        
        'marginBottom': '50px',     
    }
    const TableLine1Style={
        'border-radius': '10px',        
        'padding': '20px',
        width: '500px',
        'textAlign': '-webkit-center',
        height: '400px',        
        backgroundColor: isHover1 ? 'salmon' : 'orange',
        // color: isHover1 ? 'red' : 'green',
    }
    const TableLine2Style={
        'border-radius': '10px',             
        'padding': '20px',
        width: '500px',
        'textAlign': '-webkit-center',
        height: '400px',        
        backgroundColor: isHover2 ? 'lightgreen' : 'mediumseagreen',
        // color: isHover2 ? 'red' : 'green',
    }
    const ThemesLineStyle={        
        'display': 'contents', 
        'textAlign': '-webkit-center'
    }
    
    // Arrow Functions
    const handleMouseEnterOption1 = () => {
        setIsHover1(true);
    }
    const handleMouseEnterOption2 = () => {
        setIsHover2(true);
    }
    const handleMouseLeaveOption1 = () => {
        setIsHover1(false);
    }
    const handleMouseLeaveOption2 = () => {
        setIsHover2(false);
    }
    const incrementCounter =()=> {
        index = index + 1;
    }    
    const changeIndex = (indx)=>{       
      incrementCounter()
      FillMatch(indx)
    }
    const FillMatch = (idx)=>{
      const option1 = document.getElementsByClassName("Option1")[0]
      const option2 = document.getElementsByClassName("Option2")[0]
      idx === 1 ? (selectedThemes.push(option1.innerHTML)) : (selectedThemes.push(option2.innerHTML))  
      let op1 = '', op2 = '', random = 0;
  
      switch(index) // as number
      {
        case 1: // Type
          random = Math.floor(Math.random() * themes.type.length);
          op1 = themes.type[random];         
          op2 = themes.type[random === themes.type.length ? (random-1) : (random+1)];   
        break;
        case 2: // Duration
          random = Math.floor(Math.random() * themes.duration.length);
          op1 = themes.duration[random];         
          op2 = themes.duration[random === themes.duration.length ? (random-1) : (random+1)];                   
        break;
        case 3: // Category
          random = Math.floor(Math.random() * themes.category.length);
          op1 = themes.category[random];         
          op2 = themes.category[random === themes.category.length ? (random-1) : (random+1)];                    
        break;
        case 4: // Type
          random = Math.floor(Math.random() * themes.duration.length);
          op1 = themes.duration[random];         
          op2 = themes.duration[random === themes.duration.length ? (random-1) : (random+1)];   
        break;
        case 5: // Type
          random = Math.floor(Math.random() * themes.duration.length);
          op1 = themes.duration[random];         
          op2 = themes.duration[random === themes.duration.length ? (random-1) : (random+1)];   
          setLoad(false)
        break;
        default:        
          break;
      }
      option1.innerHTML = '<h1>'+ op1 +'</h1>'
      option2.innerHTML = '<h1>'+ op2 +'</h1>'
    }

    return (
      <>      
      <main 
        className="flex min-h-screen flex-col items-center pr-28 pl-28" 
        style={{
                    'background-color': '#1A1F25', 
                    'color': 'white',
                    display: 'grid'
                }}>       
      <div style={MainBlockStyle}>
            <div>
                <h1>Escolhemos um entretenimento para você.</h1>
                <p>Vamos fazer as perguntas, você escolhe qual combina com você e depois de 5 perguntas vamos indicar algo para você.</p>
            </div>
            <div>                    
            <table style={TableStyle}>       
                <tr style={ThemesLineStyle}>
                    <thead>
                        <td><h2 style={{'textAlign': 'left'}}>Qual você prefere?</h2></td>
                        <td style={{'text-align': '-webkit-right'}}>                            
                            <div style={{ width: '60px', height: '60px', marginBottom:'10px', 'textAlign': 'right'}}>                                
                                <CircularProgressbar className="Counter" value={index} maxValue={5} text={`${index}/5`}/>                                                                    
                            </div>
                        </td>
                    </thead>
                </tr>  
                <tr style={ThemesLineStyle}>
                <tbody className="Options">     
                    {loadMatch ?
                        (
                            <div style={{'display': 'contents', 'textAlign': '-webkit-center'}}>
                                <td
                                    className='Option1' 
                                    style={TableLine1Style} 
                                    onClick={()=>changeIndex(1)}
                                    onMouseEnter={handleMouseEnterOption1}
                                    onMouseLeave={handleMouseLeaveOption1}>
                                        <h1>Teste 1</h1>                     
                                </td>                        
                                <td
                                    className='Option2' 
                                    style={TableLine2Style} 
                                    onClick={()=>changeIndex(2)}
                                    onMouseEnter={handleMouseEnterOption2}
                                    onMouseLeave={handleMouseLeaveOption2}>
                                        <h1>Teste 2</h1>
                                </td>
                            </div>
                        )
                        :
                        (
                            <td>
                                <Spinner  animation="border" role="status">
                                    <span className="visually-hidden" >Loading...</span>
                                </Spinner>
                            </td>
                        )
                    }
                </tbody>
                </tr>
            </table>
            </div>
        </div> 
      </main>      
    </>
    )
  }

  
// export default function ContactPage(){
//         return(
//             <h1>ContactPage</h1>
//         );
// }