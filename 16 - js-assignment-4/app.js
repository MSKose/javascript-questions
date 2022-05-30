//! maaslar dizisi icin maasi ortalamanin altinda olanlara 
//! %20 zam yaparak zamli maaslari ayrı bir diziye atalım.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const ort = maaslar.reduce((x,y) => x+y, 0) / maaslar.length

const maaslar2 = maaslar.filter(x => x < ort).map(x => Math.round(x*1.20))

console.log(maaslar2);



//! Kisiler dizisi icin asagıdaki islemleri gerceklestiren kodları yazınız
//! 1: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
//! 2: 33 yasindan kücüklerin isimlerini diziye saklayiniz.
//! 3: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.

const kisiler = [ 
    { name: 'Ahmet', 
    surname: 'Can', 
    job: 'developer', 
    age: 30, }, 
    
    { name: 'Mehmet', 
    surname: 'Baki', 
    job: 'tester', 
    age: 35, }, 

    { name: 'Nur', 
    surname: 'Ersan', 
    job: 'team lead', 
    age: 40, }, 

    { name: 'Merve', 
    surname: 'Veli', 
    job: 'developer', 
    age: 26, },

    { name: 'Ruzgar', 
    surname: 'Kuzey', 
    job: 'tester', 
    age: 24, }, 
];


//! sol-1

for (let i of kisiler) {
    if (i.age < 33){
        console.log(i.name);
    }
}

//! sol-2

for (let i of kisiler) {
    if (i.age < 33){
        let nameArr = []
        nameArr += i.name
        nameArr
        Object.values(i)[0]
        console.log(Object.values(i));
    }
}
