
const express =require('express')
const port=1000
const app= express()

app.get('/',(req,res)=>{
    const {a,b}=req.query
    console.log(a,b);
    res.send(`sum ${Number(a)+Number(b)}`)
    
})



app.listen(port,()=>{
    console.log('server working');
})