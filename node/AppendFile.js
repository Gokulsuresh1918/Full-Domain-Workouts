const fs = require('fs');

fs.appendFile('output.txt', 'Appended text', 'utf8', (err) => {
 if (err) {
    console.error('Error appending to file:', err);
    return;
 }
 console.log('Data appended successfully');
});
