//! In this little assignment you are given a string of space separated 
//! numbers, and have to return the highest and lowest number.

//! Example: highAndLow("1 2 3 4 5");  // return "5 1"


//! Solution

// function highAndLow(numbers){
//     return `${numbers.split(" ").sort((a,b)=> b-a)[0]} ${numbers.split(" ").sort((a,b)=> a-b)[0]}`; 
// }


//! alternative solution 

function highAndLow(numbers) {
    var arr = numbers.split(" ");
    return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}



//? Note: apply method's syntax is apply(thisArg, argsArray)