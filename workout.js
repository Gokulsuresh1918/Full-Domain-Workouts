const { log } = require('console')
const fs = require('fs')
fs.unlink('./demo.txt',(err)=>{
    console.log(err);
})