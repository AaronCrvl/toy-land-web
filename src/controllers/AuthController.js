import Axios from 'axios';

export default function AuthController(){    
    const headers ={
        "Content-Type" : "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",  
    }    

    this.Validate = async (username, password) =>{
        try{         
            let path = 'https://localhost:44393/Auth/Validate/?username=' + username + '&password=' + password
            return await Axios.get(path, headers).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in AuthController.Validate: " + e); }
    }
}