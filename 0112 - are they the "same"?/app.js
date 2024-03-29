/*
https://www.codewars.com/kata/550498447451fbbd7600041c/javascript

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, with the 
same multiplicities (the multiplicity of a member is the number of times 
it appears). "Same" means, here, that the elements in b are the 
elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 
14641 is the square of 121, 20736 the square of 144, 361 the square 
of 19, 25921 the square of 161, and so on. It gets obvious if we write 
b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is 
not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.
*/

function comp(array1, array2){
    return array1 !== null && array2 !== null && array1.map(x => x*x).sort().toString() === array2.sort().toString()
}
/* 
I know this would have been more conveniet with optional chaining (?.)
but codewars's version of node does not accept that
*/

function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}
/*
(!!) is sometimes referred to as double-bang or simply, double not. And 
all it does is it converts truthy to true and falsy to false. Also, notice
how they used join() and not toString() to stringify 
*/