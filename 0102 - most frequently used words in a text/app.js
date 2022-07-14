//! https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
//! Write a function that, given a string of text (possibly with punctuation 
//! and line-breaks), returns an array of the top-3 most occurring words, 
//! in descending order of the number of occurrences.

//! Assumptions:
//! A word is a string of letters (A to Z) optionally containing one or more 
//! apostrophes (') in ASCII.
//! Apostrophes can appear at the start, middle or end of a word ('abc, abc', 
//! 'abc', ab'c are all valid)
//! Any other characters (e.g. #, \, / , . ...) are not part of a word and 
//!! should be treated as whitespace.
//! Matches should be case-insensitive, and the words in the result should 
//! be lowercased.
//! Ties may be broken arbitrarily.
//! If a text contains fewer than three unique words, then either the top-2 
//! or top-1 words should be returned, or an empty array if a text contains 
//! no words.

function topThreeWords(text) {
    let sorted = text.toLowerCase().replace(/[\*-:\.,;/\+]/g,"").split(' ')
      console.log(sorted);
      let obj = {}
      for (const i of sorted) {
          if (obj[i]) obj[i] += 1;
          else  obj[i] = 1;
      }
      return (Object.entries(obj).sort((x,y) => y[1] - x[1]).filter(x => x[0] || x[0]).map((x,_,z) => x[0] != "'" && x[0]).filter(Boolean).slice(0,3))
}

