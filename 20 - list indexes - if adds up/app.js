//! Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

//! For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


const ifAddUp = (list, k) => {
    for (let i in list) {
      for (let x of list.filter((x,y) => y)) {
        if (list[i] + list[x] === k) {
          return true
        }
      } 
    }
    return false
}
  
console.log(ifAddUp([9, 15, 3, 8], 17));