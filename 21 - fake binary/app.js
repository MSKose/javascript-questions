//! Given a string of digits, you should replace any 
//! digit below 5 with '0' and any digit 5 and above 
//! with '1'. Return the resulting string.

//! Note: input will never be an empty string


function fakeBin(x){
    let dizi = ''
    for (let i in x) {
      if (x[i] < 5){
        dizi += `0`
      } else {
        dizi += `1`
      }
    }
    return dizi
}


  console.log(fakeBin([5,7,8,2,1,0,5,]));