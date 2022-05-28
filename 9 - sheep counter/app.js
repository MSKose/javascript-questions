// Consider an array/list of sheep where some sheep may be 
// missing from their place. We need a function that counts 
// the number of sheep present in the array (true means present).

// The correct answer would be 17.

// For example: 
arrr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, null, undefined, true]


let counter = 0

function countSheeps(arrayOfSheep) {
    for (let x of arrayOfSheep){
      if (x === true) {
        counter++
      }
    }
    return counter
}

console.log(countSheeps(arrr));
