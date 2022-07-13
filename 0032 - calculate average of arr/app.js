//! Write a function which calculates the average of the numbers in a given list.
//! Note: Empty arrays should return 0.


function find_average(array) {
    return  array.length ? array.reduce((x,y) => x+y,0) / array.length : 0;
}

// So proud of myself. I came up with this solution in couple mins. Compared to where
// I was few days back, I have gained a lot of experience 
