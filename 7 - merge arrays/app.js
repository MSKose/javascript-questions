// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.


function merger(a,b) {
    const c = a.concat(b);
    return c.sort((x,y)=>x-y);
}

console.log(merger([2, 3, 4], [6,7,0]));  // [ 0, 2, 3, 4, 6, 7 ]