import Axios from 'axios';

export default function AuthController(){
    const _header = {
        headers:{
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"   
        }
    }

    this.Auth = (Token) =>{
        let path = '' + Token
        return Axios.get(path, _header).then(response => response.status)  
    }
}