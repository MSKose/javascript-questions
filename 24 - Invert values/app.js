//! Given a set of numbers, return the additive inverse of 
//! each. Each positive becomes negatives, and the negatives 
//! become positives.

const invert = (array) => array.length ? array.map(a => -a) : array