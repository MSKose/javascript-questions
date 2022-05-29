// Purpose of the this coding challenge is to write a code 
// that given numbers convert to Roman Numerals. The Romans 
// wrote numbers using letters - I, V, X, L, C, D, M. 



function roman(a){
    const romanObj = {
    name: 'I',
    '2': 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    60:'LX',
    70: 'LXX',
    80:'LXXX',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700:'DCC',
    800:'DCCC',
    900: 'CM',
    1000:'M'
};
 
    if (`${a}`.length === 1) {
        
        console.log(romanObj.2);
        return romanObj.a
    };
    
    
}

console.log(roman(3));

