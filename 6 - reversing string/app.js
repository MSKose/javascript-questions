// Write a function that it reverses the string passed into it.
// 'world'  =>  'dlrow'

// my solution
function solution(str){
    const b = [];
    str.split('').forEach(shifter = (x) => b.unshift(x));
    return b.join('');
}

console.log(solution("world"));  // dlrow


// other solutions. apparently I have overthought about it again lol

// alternative sol-1
function solution(str){
    return str.split('').reverse().join('');  
}

// alternative sol-2
const solution = str => str.split('').reverse().join('');

// alternative sol-3
const solution = s => [...s].reverse().join('')

