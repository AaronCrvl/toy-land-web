export default function Server(){    
    const express = require('express')
    const cors = require('cors')    
    const app = express() 
    const corsOptions ={
        origin:'*', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,
    }          

    app.get('/cors', (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');    
    })            
    app.use(cors(corsOptions))
    app.listen(3000, () => console.log('Running on port 3000!'));            
}