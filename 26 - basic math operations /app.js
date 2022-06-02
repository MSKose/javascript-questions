//! Your task is to create a function that does four basic mathematical operations.

//! The function should take three arguments - operation(string/char), value1(number), value2(number).
//! The function should return result of numbers after applying the chosen operation.



function basicOp(operation, value1, value2){
    if (operation === '+') {
        return value1 + value2
    } else if (operation === '-') {
        return value1 - value2 
    } else if (operation === '*'){
        return value1 * value2
    }else if (operation === '/'){
        return value1 / value2
    }else {
        return "type a legit operator please"
    }
}

console.log(basicOp('/', 10, 5));


//! alternative solution(s)

//! alt-1
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

//? a small note here out of mdn page: "The break statement 
//? is not required if a return statement precedes it." 
//? Therefore, this solution does not need a break!


//! alt-2
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}