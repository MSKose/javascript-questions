//! You will be given an array of numbers. You have to sort 
//! the odd numbers in ascending order while leaving the 
//! even numbers at their original positions.

//! Samples:
//! [7, 1]  =>  [1, 7]
//! [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//! [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
//    let v = array.filter(x => Math.abs(x%2)==1).sort((a,b)=> a-b)                                                     //used Math.abs so as to pass through negative values too
    return array.map(s => Math.abs(s%2)==1 ? array.filter(x => Math.abs(x%2)==1).sort((a,b)=> a-b).shift() : s)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))

