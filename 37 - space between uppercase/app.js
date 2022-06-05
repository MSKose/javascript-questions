//! Complete the solution so that the function will break 
//! up camel casing, using a space between words.

//! "camelCasing"  =>  "camel Casing"
//! "identifier"   =>  "identifier"
//! ""             =>

// My solution:
function solution(string) {
    return string.replace(/[A-Z]/g, x => ` ${x}`);
}

console.log(solution("jkwbfewjbEkjbsd"));

// had to look back to replace method from w3 for further details. 
// Learnt that you can use a function for the second part (replaced part)