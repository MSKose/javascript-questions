//! Given two integers a and b, which can be positive or 
//! negative, find the sum of all the integers between 
//! and including them and return it. If the two numbers 
//! are equal return a or b.

//! Note: a and b are not ordered!

const getSum = (a,b) => {
    if (a === b){
        return a
    } else if (a > b){
        return b + getSum(a, b+1)
    } else {
        return a + getSum(a+1, b)
    }
}

//? I got hints from the internet but boy this is an answer


//! alternative solution with Gauss summation

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

//? Gauss summation formula is as follows:
//? (numbers of pairs)(sum of each pair)/2


