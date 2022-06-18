//! This is an interview question asked by Stripe.

//! Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

//! For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
//! You can modify the input array in-place.

const minInt = (arr) => {
    let arr1 = [...new Set(arr.filter(x => Math.abs(x) == x).sort((a,b) => a-b))]
    let g = []
    for (let i = 0; i < arr1.length-1; i++){
      if (arr1[i] + 1  == arr1[i+1]) {
        g
      } 
      else if (arr1[i] + 1  != arr1[i+1]){
        g.push(arr1[i] + 1)
      }
    }
    return g.length == 0 ? arr1[arr.length -1] + 1 : g[0]
}
  
console.log(minInt([3,4,-1,1]));
console.log(minInt([1,2,0]));