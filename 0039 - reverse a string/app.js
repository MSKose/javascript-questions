//! write a function that reverses a string 

const reverseStr = (text) => {
    return text.split('').reverse().join('')
}

console.log(reverseStr("hello there"));


//! alternative solution below

const reversed = (str) => {
    let rtrStr = "";
    for (let i = str.length-1; i >= 0; i--){
        rtrStr += str[i]
    }
    return rtrStr
}

console.log(reversed("hello there"));