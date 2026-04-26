const express = require('express')
const cors=require('cors')



const app = express()
app.use(cors())

const email = "baranibtech4@gmail.com"
const password = "Barani@123"


app.get('/dashboard',(req,res)=>{
    if(req.query.email === email && req.query.password === password){
        res.send(true)
    }
    else{
        res.send(false)
    }
})
app.listen(5000,()=>{
    console.log("Server is Started . . .")
})