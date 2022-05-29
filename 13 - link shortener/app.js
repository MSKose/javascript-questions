// write a code to convert a long link to a shorter one
// for example: https://www.youtube.com/watch?v=b7vfp5G4brE
// above link should be https://youtu.be/b7vfp5G4brE



const converter = (x) => x.replace('www.', '').replace('watch?v=', '').replace('be.com', '.be')

console.log(converter("https://www.youtube.com/watch?v=b7vfp5G4brE"));
