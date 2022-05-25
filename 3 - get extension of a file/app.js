// Write a JS program to get the 
// extension of a filename


// solution-1
let fileName = "hello.jsh";
let dot = fileName.indexOf('.');
let sliced = fileName.slice(dot + 1);

console.log(sliced);

//solution-2
const fileExtension = (fileName) => fileName.slice(fileName.lastIndexOf('.') + 1);

console.log(fileExtension("app.js"));

//second solution is better because if we had a dot in the file name, indexOf() 
// would have divided the string from the wrong dot onwards
