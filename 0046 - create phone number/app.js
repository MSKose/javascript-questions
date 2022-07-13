//! Write a function that accepts an array of 10 integers 
//! (between 0 and 9), that returns a string of those 
//! numbers in the form of a phone number.



function createPhoneNumber(numbers){
    numbers.unshift('(')
    numbers.splice(4, 0, ")", " ");
    numbers.splice(9, 0, "-");
    return numbers.join('')
}


//! alternative solution

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}

//! such a slick way to solve this problem