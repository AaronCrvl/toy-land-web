import Axios from 'axios';

export default function ProductController(){
    const _header = {
        headers:{
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*" ,
            'accept': "application/json",  
        }
    }

    this.GetProductById = (id) =>{        
        try{         
            let path = 'https://localhost:44393/Product/GetProductById/' + id
            return Axios.get(path, _header).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in GetProductById: " + e); }
    }

    this.GetAllProducts = async () =>{
        try{
            let path = 'https://localhost:44393/Product/GetAllProducts'
            return Axios.get(path, _header).then(response => response.data)  
        }
        catch(e) { console.error("Erro in GetAllProducts: " + e); }
    }

    this.GetProductsByRegisterQuantity = async (registers) =>{
        try{
            let path = 'https://localhost:44393/Product/GetProductsByRegisterQuantity/' + registers
            return Axios.get(path, _header).then(response => response.data)  
        }
        catch(e) { console.error("Erro in GetProductsByRegisterQuantity: " + e); }
    }
}