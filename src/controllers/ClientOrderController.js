import Axios from 'axios';

export default function ClientOrderController(){    
    const headers ={
        "Content-Type" : "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",  
    }    

    this.CreateProductOrder = async (idProduct_, idAccount_) =>{        
        try{                
            const json = JSON.stringify({                
                idProduct: idProduct_,
                idAccount: idAccount_,                                            
            })

            let path = 'https://localhost:44393/CreateProductOrder/CreateProductOrder/'
            return Axios.get(path, json, headers).then(response => response.data)                                              
        }
        catch(e) { console.error("Erro in ClientOrderController.CreateProductOrder: " + e); }
    }
}