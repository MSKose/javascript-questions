// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better 
// than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the
// average and compare your score!

// Return True if you're better, else False!

// NOTE: Your points are not included in the array of your class's 
// points. For calculating the average point you may add your point 
// to the given array!


function betterThanAverage(classPoints, yourPoints) {
    let counter = 0
    let avg = classPoints.concat(yourPoints)
    for (let x of avg){
      counter += x
    } 
    return counter / classPoints.length <= yourPoints
}


// alternative solutions


function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((a,b) => a+b, 0) <= yourPoints;
}