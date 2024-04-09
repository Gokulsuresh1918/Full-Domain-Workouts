const express=require('express')
const app=express()
const port=1000
app.get('/greet/:name',(req,res)=>{
    const name=req.params.name
    res.send(`vannu ${name}`)
})
//http://localhost:1000/greet/gokul
app.listen(port,()=>{
    console.log('lskdjfgdklas');
})