//! Write a function called sumRange. It will take a 
//! number and return the sum of all numbers from 1 
//! up to the number passed in.


const sumRange = (x) => x == 1 ? 1 : x + sumRange(x-1)


//? same code with a more readable syntax below:

const sumRange = (x) => {
    if (x == 1) {
        return 1
    } else {
        x + sumRange(x-1)
    }
}
