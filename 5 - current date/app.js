// Write a JS program to get the current date.
// Expected Output;
// mm-dd-yyyy, mm/dd/yyyy, or dd-mm-yyyy, dd/mm/yyyy

const dateMaker = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

console.log(dateMaker());


//! important thing to note here is that with JavaScript
//! you first have to define a variable with new Date() and 
//! move on to get whatever date data you want.