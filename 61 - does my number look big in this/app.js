//! A Narcissistic Number is a positive number which is the 
//! sum of its own digits, each raised to the power of the 
//! number of digits in a given base. In this Kata, we will 
//! restrict ourselves to decimal (base 10).

//! For example, take 153 (3 digits), which is narcisstic:
//! 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

//! and 1652 (4 digits), which isn't:
//! 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

//! Your code must return true or false (not 'true' and 'false') 
//! depending upon whether the given number is a Narcissistic number

function narcissistic(value) {
    let len = value.toString().length
    let arr =value.toString().split('')
    return arr.map(x => Math.pow(+x, len)).reduce((x,y) => x+y) == value
}


//! Alternative solution-1
function narcissistic(value) {
    return value.toString()
                .split('')
                .map( (x,i,arr) => x ** arr.length)
                .reduce( (a,b)=> +a + +b) 
                 === value
}
