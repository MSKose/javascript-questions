//! It's pretty straightforward. Your goal is to 
//! create a function that removes the first and 
//! last characters of a string. You're given one 
//! parameter, the original string. You don't 
//! have to worry with strings with less than 
//! two characters.




const removeChar = (str)=> {
    let strr = str.split('')
    strr.pop()
    strr.shift()
    return strr.join('')
}

console.log(removeChar('hello'));


//! alternative solution(s) added 
const removeeChar = (char) => char.slice(1,-1);

console.log(removeeChar('djbvlj'));

//? this is interesting because I would have thought 
//? that with this method only char.length -1 would 
//? have worked for the second parameter for the slice
//? method. However, apparently with slice method negative
//? indexes do work