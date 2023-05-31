import Axios from 'axios';

export default function ProductController(){
    const headers ={
        "Content-Type" : "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",  
    }  

    this.GetProductById = async (id) =>{        
        try{         
            let path = 'https://localhost:44393/Product/GetProductById/?id=' + id
            return Axios.get(path, headers).then(response => response.data)                      
        }
        catch(e) { console.error("Erro in ProductController.GetProductById: " + e); }
    }

    this.GetAllProducts = async () =>{
        try{
            let path = 'https://localhost:44393/Product/GetAllProducts'
            return Axios.get(path, headers).then(response => response.data)  
        }
        catch(e) { console.error("Erro in ProductController.GetAllProducts: " + e); }
    }

    this.GetProductsByRegisterQuantity = async (registers) =>{
        try{
            let path = 'https://localhost:44393/Product/GetProductsByRegisterQuantity/?registers=' + registers
            return Axios.get(path, headers).then(response => response.data)  
        }
        catch(e) { console.error("Erro in ProductController.GetProductsByRegisterQuantity: " + e); }
    }

    this.GetProductStock = async (id) =>{
        try{
            let path = 'https://localhost:44393/Product/GetProductStock/?id=' + id
            return Axios.get(path, headers).then(response => response.data)  
        }
        catch(e) { console.error("Erro in ProductController.GetProductStock: " + e); }
    }
}