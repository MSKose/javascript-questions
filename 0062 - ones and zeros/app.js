//! Given an array of ones and zeroes, 
//! convert the equivalent binary value 
//! to an integer.

//! Eg: [0, 0, 0, 1] is treated as 0001 
//! which is the binary representation 
//! of 1.

//! Testing: [0, 0, 0, 1] ==> 1
//! Testing: [0, 0, 1, 0] ==> 2
//! Testing: [0, 1, 0, 1] ==> 5
//! Testing: [1, 0, 0, 1] ==> 9
//! Testing: [0, 0, 1, 0] ==> 2
//! Testing: [0, 1, 1, 0] ==> 6
//! Testing: [1, 1, 1, 1] ==> 15
//! Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
    return arr.reverse().reduce((x,y,z) => y  * Math.pow(2, z) + x)
};


//! alternative

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// ok, I didn't know about this. So apparently the  method 
// parseInt()'s second parameter is the radix (base)
