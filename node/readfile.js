//readfile synchronosly

const fs = require('fs')
const data = fs.readFileSync('example.txt', (err, data) => {
    if (data) {
        console.log('data');
    }
})




//readfile async
  
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
 if (err) {
    console.error('Error reading file:', err);
    return;
 }
 console.log(data);
});
