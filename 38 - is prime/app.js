//! Define a function that takes an integer argument and returns a logical 
//! value true or false depending on if the integer is a prime.

const isPrime = (num) => {
    if (num <= 1) {
        return false
    }else {
        if ([...Array(num)].map((_,i) => i+1).filter(x => num % x == 0).length == 2){
            return true
        }else return false
    }
}
  
console.log(isPrime());
