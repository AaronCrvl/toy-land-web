import Axios from 'axios';

export default function ClientOrderController(){    
    const headers = {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",  
    }

    this.GetClientOrder = async (idAccount_, idProduct_) =>{        
        try{                           
            let path = 'https://localhost:44393/ClientOrder/GetClientOrder/?idAccount_=' + idAccount_ + '&idProduct_=' + idProduct_
            return Axios.get(path, headers).then(response => response.data)                                              
        }
        catch(e) { console.error("Erro in ClientOrderController.GetClientOrder: " + e) }
    }  

    this.GetOrdersByClient = async (idAccount_) =>{        
        try{                           
            let path = 'https://localhost:44393/ClientOrder/GetOrdersByClient/?idAccount_=' + idAccount_
            return Axios.get(path, headers).then(response => response.data)                                              
        }
        catch(e) { console.error("Erro in ClientOrderController.GetOrdersByClient: " + e) }
    }  

    this.CreateProductOrder = async (idProduct_, idAccount_) =>{        
        try{                
            const json = JSON.stringify({                
                idProduct: idProduct_,
                idAccount: idAccount_,                                            
            })

            let path = 'https://localhost:44393/ClientOrder/CreateProductOrder/'
            return Axios.post(path, json, headers).then(response => response.data)                                              
        }
        catch(e) { console.error("Erro in ClientOrderController.CreateProductOrder: " + e) }
    }   
}