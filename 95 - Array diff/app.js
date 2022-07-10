//! https://www.codewars.com/kata/523f5d21c841566fde000009/
//! Your goal in this kata is to implement a difference function,
//!  which subtracts one list from another and returns the result.

//! It should remove all values from list a, which are present in 
//! list b keeping their order.

//! arrayDiff([1,2],[1]) == [2]
//! If a value is present in b, all of its occurrences must be 
//! removed from the other:

//! arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    let arr = [];
    let found = false;                     // flag value here
    for (let i=0; i<a.length; i++) {
        found = false;
        for (let k=0; k<b.length; k++){
            if (a[i] === b[k]){
                found = true;
                break;
            }
        }
        if (!found) {
            arr.push(a[i]);
        }
    }
    return arr;
}


//! alternative solution-1
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

//! alternative solution-2
function array_diff(a, b) {
    return a.filter(x => b.indexOf(x) == -1);
}
// clever

//! alternative solution-3
function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}
// make a Set to use it's has property. genius