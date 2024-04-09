const express=require('express')
const app=express()
const port=1000
app.get('/',(req,res)=>{
    const name=req.query.name
    res.send(`vannu ${name}`)
})
app.listen(port,()=>{
    console.log('lskdjfgdklas');
})