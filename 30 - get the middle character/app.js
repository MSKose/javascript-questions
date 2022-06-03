//! You are going to be given a word. Your job is to return 
//! the middle character of the word. If the word's length 
//! is odd, return the middle character. If the word's length 
//! is even, return the middle 2 characters.


const getMiddle = (s) =>{
	if(s.length === 1 || s.length === 2){
		return s
	}else if (s.length % 2 === 0){
		return s.slice((s.length-2)/2, -(s.length-2)/2)
	}else{
	return s.slice((s.length-1)/2, -(s.length-1)/2)
  }
}