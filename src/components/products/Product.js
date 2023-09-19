import { useNavigate } from 'react-router-dom';
import '../css/componentsCss.css';
import { Card } from 'react-bootstrap';

export default function Product({ idAcct, id, name, descripton, imageURL }){  
    // Navigation ------------------------------>    
    const navigate = useNavigate()
    
    // Functions ------------------------------>
    const navigateBuy = () => {        
        navigate('/hello/buy', {
            state: {
              productId: id,
              idAccount: idAcct,
            }
          });        
    }  

    // Jsx ------------------------------>
    return (
        <div className="grid p-1 w-full h-full">
            <div className='bg-red-800 hover:bg-red-700 text-white p-2 w-full h-full rounded'>
                <div className='p-5 bg-white rounded mb-2'>
                    <Card.Img variant="top" src={imageURL} id='ImageStyle' />
                </div>
                <div className='container font-sans'>
                    <div className='p-3'>
                        <div className='text-4xl text-left font-bold'
                        >
                            {name}
                        </div>
                    </div>
                    <div className='p-3'>                        
                        <div className='p-1 w-auto text-left font-semibold'>
                            {descripton}
                        </div>                                                                                                    
                    </div>             
                    <div className='p-3'>
                        <div className='btn bg-danger text-white font-sans font-bold p-2 font-medium'
                            onClick={navigateBuy}                        
                        >
                            See More
                        </div>                                
                    </div>    
                </div>
            </div>                                                                      
        </div>
    );
}