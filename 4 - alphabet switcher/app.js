// Write a JS program to replace every character in a given 
// string with the character following it in the alphabet

// Solution-1
let someText= "Hello";
let newText = "";

for (let i = 0; i < someText.length; i++) {
    newText += String.fromCharCode(someText.charCodeAt(i)+1);
}
console.log(newText);


// Solution-2
let textConvert = (str) => 
        str.split('')
        .map((char) => String.fromCharCode(char.charCodeAt(0)+1))
        .join('');
console.log(textConvert("Hello"));

//!  .split('') method splits a string into an array of substrings
//!  .map creates a new array from calling a function for every array element
//!  .map is like a for loop. Thus, putting 0 worked for our case
//!  join() method returns an array as a string
