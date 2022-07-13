//! Your car is old, it breaks easily. The shock absorbers are 
//! gone and you think it can handle about 15 more bumps before 
//! it dies totally.

//! Unfortunately for you, your drive is very bumpy! Given a 
//! string showing either flat road ("_") or bumps ("n"), work 
//! out if you make it home safely. 15 bumps or under, return 
//! "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
    if (x.split('').every(x => x == '_')) {  // every() method executes a function for each array elements and returns true if the function returns true for all elements.
        return 'Woohoo!'
    }else {
        return x.match(/n/g).length <= 15 ? 'Woohoo!' :  "Car Dead"
    }
}

// my second solution (played with methods)
function bump(x){
  let y = x.split('').sort()
  return y.join('').substring(y.lastIndexOf('_')+1).length <=15 ? 'Woohoo!' :  "Car Dead" // substring() method extracts characters
}

//! alternative solution(s)

const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"