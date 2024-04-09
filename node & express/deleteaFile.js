const fs = require('fs');

const filePath = 'path/to/your/file.txt';

fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully');
    }
});
