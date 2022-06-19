//! Write a function that takes a string of parentheses, 
//! and determines if the order of the parentheses is 
//! valid. The function should return true if the string 
//! is valid, and false if it's invalid.

//! Examples
//! "()"              =>  true
//! ")(()))"          =>  false
//! "("               =>  false
//! "(())((()())())"  =>  true


// my solution was brute force so I'm gonna put the alternative ones

//! alterntive-1
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    return n == 0;
}

//! alternative-2
function validParentheses(parens){
    var re = /\(\)/;
    while (re.test(parens))  parens = parens.replace(re, "");
    return !parens;
}



