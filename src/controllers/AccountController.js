import Axios from 'axios';

export default function AccountController(){    
    const headers = {
        "Content-Type" : "text/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",  
    }    

    this.GetAccount = async (id) =>{
        try{         
            let path = 'https://localhost:44393/Account/GetAccount/?id=' + id
            return Axios.get(path, headers).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in AccountController.GetAccount: " + e) }
    }

    this.CreateNewAccount = (firstName, lastName, username, password) =>{
        try{                
            const json = JSON.stringify({
                FirstName: firstName, 
                LastName: lastName,
                Username: username,                            
                Password: password, 
            })

            let path = 'https://localhost:44393/Account/CreateAccount/'
            return Axios.post(path, json, headers)                                    
        }
        catch(e) { console.error("Erro in AccountController.CreateNewAccount: " + e) }
    }

    this.AlterAccount = (idAccount, firstName, lastName, username, password) =>{
        try{                
            const json = JSON.stringify({
                IdAccount: idAccount,
                FirstName: firstName, 
                LastName: lastName,
                Username: username,                            
                Password: password, 
            })

            let path = 'https://localhost:44393/Account/AlterAccount/'
            return Axios.put(path, json, headers)                                    
        }
        catch(e) { console.error("Erro in AccountController.AlterAccount: " + e) }
    }
}