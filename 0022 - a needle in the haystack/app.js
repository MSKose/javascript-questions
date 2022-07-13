//! Can you find the needle in the haystack?

//! Write a function findNeedle() that takes 
//! an array full of junk but containing one 
//! "needle"

//! After your function finds the needle it 
//! should return a message (as a string) that 
//! says:

//! "found the needle at position " plus the 
//! index it found the needle, so:


function findNeedle(haystack) {
    for (let i in haystack){
      if (haystack[i] === "needle"){
        return `found the needle at position ${i}`
      }
    }
}

//! alternative solution(s)
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

//? interesting this. didn't know indexOf could also be used with arrays