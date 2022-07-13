//! Write a function that removes every lone 9 that is inbetween 7s.

//! "79712312" --> "7712312"
//! "79797"    --> "777"


function sevenAte9(str) {
    let arr = str.split('')
    for (let i = 0; i<arr.length; i++){
      if(arr[i] == '9' && arr[i-1] == '7' && arr[i+1] == '7'){
        arr.splice(i,1)
      }
    }
    return arr.join('')
}


//! alternative sol-1
function removeNine(str){
    return str.split("").map((e,index,arr) => e == "9" && arr[index-1] == "7" && arr[index+1] == "7" ? e = "" : e).join("")
}
// my solution only more concise

//! alternative sol-2
function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7');
}