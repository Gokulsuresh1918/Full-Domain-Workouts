const fs = require('fs')
fs.appendFile('out.txt', 'hello world','utf-8',(err)=>{
    if(err){
        console.log('error');
        return
    }
    console.log('data added');
})