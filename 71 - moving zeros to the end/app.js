//! https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

//! Write an algorithm that takes an array and moves 
//! all of the zeros to the end, preserving the order 
//! of the other elements.

//! examples:
//! moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns [false,1,1,2,1,3,"a",0,0]
//! moveZeros([1,2,0,1,0,1,0,3,0,1]) // returns [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]


const moveZeros = (arr) => {
    let nonzeros = arr.filter(x => x !== 0)
    let len = arr.length - nonzeros.length
    let zeros = [...Array(len)].map(x => 0)
    return [...nonzeros, ...zeros]
}


//! alternative solution 
let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
