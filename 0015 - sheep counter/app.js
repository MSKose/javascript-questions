//! Given a non-negative integer, 3 for example, 
//! return a string with a murmur: "1 sheep...2 
//! sheep...3 sheep...". Input will always be 
//! valid, i.e. no negative integers.



const countSheep = function (num){
    let text = ''
    if (num === 0) {
        return text
    } else {
        for (let i=1; i <= num; i++){
            text += `${i} sheep...`
        }
        return text
    }
}

console.log(countSheep(7));


//! Alternative solutions 

const countSheep = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
      val += `${i} sheep...`;
    }
    return val;
  }

  // this one is clever cuz it just returns the string without
  // getting into if-else. In fact, I just realized I too didn't 
  // need any if-else. Could have just gone with the for loop
