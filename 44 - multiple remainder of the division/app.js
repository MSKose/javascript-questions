//! Your task it to return true if the fractional part 
//! (rounded to 1 digit) of the result (a / b) exists, 
//! more than 0 and is multiple of n. Otherwise return 
//! false. (For Python return True or False)

//! All arguments are positive digital numbers.

//! Rounding works like toFixed() method. (if more 
//! than...5 rounds up)


function isMultiple(a, b, n) {
    let y = (a/b).toFixed(1)
    let x = y.indexOf('.')
    let z = y.slice(x+1)
    if (z > 0 && z % n === 0){
      return true
    }else{
      return false
    }
}