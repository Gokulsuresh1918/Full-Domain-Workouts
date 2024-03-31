// sync

const fs = require('fs');

try {
 fs.writeFileSync('output.txt', 'Hello, World!', 'utf8');
 console.log('File written successfully');
} catch (err) {
 console.error('Error writing file:', err);
}


//async
const fs = require('fs');

fs.writeFile('output.txt', 'Hello, World!', 'utf8', (err) => {
 if (err) {
    console.error('Error writing file:', err);
    return;
 }
 console.log('File written successfully');
});
