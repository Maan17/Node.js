const path = require('path');

//Basename
//It lists the filename
console.log(path.basename(__filename));

//Directory name
//lists the folder name of current file
console.log(path.basename(__filename))

// File extensions
// outputs the extension of current file
console.log(path.extname(__filename))

//Create path object 
// creates objects with different parts of path
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));