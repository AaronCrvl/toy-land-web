export default function Server(){    
    const express = require('express')
    const cors = require('cors')    
    const app = express()        
    app.use(cors())
    app.listen(3000, () => console.log('Running on port 3000!'));            
    app.get('/cors', (req, res) => {
            res.set('Access-Control-Allow-Origin', '*');    
        })
}