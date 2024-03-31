const fs = require('fs')
fs.readFile('exampole.txt', (err,data)=>{
    if(err){
        console.log('err');
    }
})