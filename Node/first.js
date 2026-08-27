console.log("Hello, World!");
const fs = require('fs');
// Create a new file named 'output.txt' and write some content to it
fs.writeFileSync('output.txt', 'This is a test file created by Node.js', (error) => {
    if (error) {
        console.error('Error writing to file:', error);
    }
});
