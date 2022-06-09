//! Write an algorithm that will identify valid IPv4 
//! addresses in dot-decimal format. IPs should be 
//! considered valid if they consist of four octets, 
//! with values between 0 and 255, inclusive.
//! Leading zeros (e.g. 01.02.03.04) are considered invalid
//! Inputs are guaranteed to be a single string

//! Examples of valid inputs:
//! 1.2.3.4
//! 123.45.67.89

//! Examples of invalid inputs:
//! 1.2.3
//! 1.2.3.4.5
//! 123.456.78.90
//! 123.045.067.089

const isValidIP = str => {
    console.log(str.split('.').filter(x => x.length==1 ? 0<=x && x<=9 : x.length > 1 && x[0] != 0).length == 4 ? str.split('.').filter(x => 0<=x && x<=255).length == 4 && str.split('.').filter(x => JSON.stringify(x).split('').every(e => Number.isInteger(+e))).length == 4 ? true : false : false) 
    // console.log(str.split('.').filter(x => 0<=x && x<=255))
}

isValidIP('1.2.3.4')

// let str = '1.2.3.4\n'

// console.log(['1', '2', '0'].every(e => Number.isInteger(+e)))

console.log('1.23.3.4\n'.split('.')[3].length);

// console.log(str.split('.').filter(x => x.split('').every(e => Number.isInteger(+e))))


// console.log(['3', '\'', '2'].split('').every(e => Number.isInteger(+e)));

console.log(JSON.stringify('56\n').split('').every(e => Number.isInteger(+e)));
console.log(JSON.stringify('56\n'));

console.log(JSON.stringify('56\n').split(''));
// let y = JSON.stringify('56').split('').pop() \n JSON.stringify('56').split('').shift().shift()
// console.log(y) 
  


