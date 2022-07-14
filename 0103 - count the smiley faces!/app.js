//! https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
//! Given an array (arr) as an argument complete the function countSmileys 
//! that should return the total number of smiling faces.

//! Rules for a smiling face:

//! Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//! A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//! Every smiling face must have a smiling mouth that should be marked with either ) or D
//! No additional characters are allowed except for those mentioned.

//! Valid smiley face examples: :) :D ;-D :~)
//! Invalid smiley faces: ;( :> :} :]

//! countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//! countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
//! countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
    return arr.filter(x => x.length == 2 ? (x[0] == ':' || x[0] == ';') && (x[1] == 'D' || x[1] == ')') : x.length == 3 ? (x[0] == ':' || x[0] == ';') && (x[2] == 'D' || x[2] == ')') && (x[1] == '-' || x[1] == '~'): false).length
}
// potential for being the uglies code ever;~D



