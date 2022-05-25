// Write a JS program to check two numbers and 
// return true if one of the number is 100 or if 
// the sum of the two numbers is 100


let equalTo100 = (a,b) => a === 100 || b === 100 || a+b === 100;


// Lets try some logs

console.log(equalTo100(50,50)); //true
console.log(equalTo100(0,99)); //false
console.log(equalTo100(100,0)); //true
console.log(equalTo100(0,100)); //true

