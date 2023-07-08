import Axios from 'axios';

export default function ClientCartController(){    
    const headers = {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",          
    }    

    this.StoreInCart = async (idAccount, idProduct) =>{
        try{         
            const json = JSON.stringify({
                idProduct: idProduct                                                        
            })

            let path = 'https://localhost:44393/ClientCart/StoreInCart/?idAccount=' + idAccount + '&idProduct=' + idProduct
            return await Axios.post(path, json, headers).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in ClientCartController.StoreInCart: " + e) }
    }

    this.GetCartCount = async (idAccount) =>{
        try{         
            let path = 'https://localhost:44393/ClientCart/GetCartCount/?idAccount=' + idAccount
            return await Axios.get(path, headers).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in ClientCartController.GetCartCount: " + e) }
    }

    this.RemoveProductFromCart = async (idAccount, idProduct) =>{
        try{         
            let path = 'https://localhost:44393/ClientCart/RemoveProductFromCart/?idAccount=' + idAccount + '&idProduct=' + idProduct
            return await Axios.delete(path, headers).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in ClientCartController.RemoveProductFromCart: " + e) }
    }

    this.GetCartProducts = async (idAccount) =>{
        try{         
            let path = 'https://localhost:44393/ClientCart/GetCartProducts/?idAccount=' + idAccount
            return await Axios.get(path, headers).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in ClientCartController.GetCartProducts: " + e) }
    }
}