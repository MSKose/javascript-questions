const fiyatlar = [100, 250, 50, 89];

//! soru-1: fiyatlar dizisinde her bir fiyata %10 zam yapalım. 
//! NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

fiyatlar.forEach((value,index,arr) => arr[index] = Math.round(value*1.1))
console.log(fiyatlar);


//! soru-2: fiyatlar dizisindeki fiyatı 90'dan büyük olan 
//! değerleri konsola tek tek bastırınız.

fiyatlar.forEach(x => x > 90 && console.log(x));

//! soru-3: fiyatlar dizisindeki fiyatı 110'dan küçük olan 
//! değerlere %10 artış yapın ve bu değerleri konsola tek tek 
//! bastırınız.

fiyatlar.forEach(x => x < 110 && console.log(Math.round(x*1.1)));




const maaslar = [3000, 5000, 4000, 6000, 6500];

//! soru-4: maaslar dizisinde 4000'den düsük olan maaslara %50 zam
//! yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const dortbin = (arr) => arr.filter(x => x < 4000).map(y => Math.round(y * 1.5));
console.log(dortbin(maaslar)); 

//! soru-5: Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari 
//! konsolda yazdiralim.

const yirmibeszam = (arr) => arr.filter(x => x > 4000).map(y => console.log(Math.round(y * 1.25)));
console.log(yirmibeszam(maaslar)); 

//! Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz


//! forEach ile:
let counter = 0
let toplam = maaslar.forEach(x => counter += x);
console.log(counter);

//! reduce ile 
let reduceToplam = maaslar.reduce((x,y) => x+y,0);
console.log(reduceToplam);

