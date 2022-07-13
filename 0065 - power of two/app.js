//! Complete the function power_of_two/powerOfTwo (or equivalent, 
//! depending on your language) that determines if a given 
//! non-negative integer is a power of two

//! Examples
//! isPowerOfTwo(1024) // -> true
//!isPowerOfTwo(4096) // -> true
//! isPowerOfTwo(333)  // -> false
//! Beware of certain edge cases - for example, 
//! 1 is a power of 2 since 2^0 = 1 and 0 is not 
//! a power of 2.

function isPowerOfTwo(n){
    if (n === 1){
      return true
    } 
    else if (n % 2 !== 0 || n == 0) {
      return false
    } 
    return isPowerOfTwo(n/2)
}  

//! alternative solutions 
function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}

// ok, I didn't know about this. So what Math.log2(n) does is
// it takes a logarithm on 2th base


