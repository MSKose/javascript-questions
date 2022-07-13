//! Compute the running median of a sequence of numbers. 
//! That is, given a stream of numbers, print out the 
//! median of the list so far on each new element.

//! Recall that the median of an even-numbered list is the 
//! average of the two middle numbers.

//! For example, given the sequence [2, 1, 5, 7, 2, 0, 5], 
//! your algorithm should print out: 2, 1.5, 2, 3.5, 2, 2, 2



const median = (arr) => {
    let newArr =[];
    arr.forEach((x,y) => {
      newArr.push(x);
      newArr.sort((a,b) => a-b);
      let c = Math.floor(newArr.length/2);
      if (y%2 == 0){
        console.log(newArr[c])
      }else{
        console.log((newArr[c] + newArr[c - 1]) / 2)
      }
    })
}
  
console.log(median([2, 1, 5, 7, 2, 0, 5]));
  
  
  