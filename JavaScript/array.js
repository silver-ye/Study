'use strict';

// Array๐

// 1. Declaration
const arr1 = new Array(); // ๋ฐฐ์ด ์์ฑ
const arr2 = [1, 2]; // ๋ฐฐ์ด ์์ฑ

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // ๐
console.log(fruits[1]); // ๐
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length -1]); // ๐

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => { // ์ธ์๋ค๊ณผ ์ธ๋ฑ์ค, ์ ์ฒด ๋ฐฐ์ด๊น์ง ๋ฐ์์ ์ฌ์ฉํ  ์ ์์ง๋ง, ๋ฐฐ์ด์ ์ ์ฌ์ฉํ์ง์์
    console.log(fruit, index); // ๊ณผ์ผ๊ณผ ์ธ๋ฑ์ค๋ฅผ ์ถ๋ ฅ ๊ฐ๋ฅ
});

fruits.forEach((fruit) => console.log(fruit)); // ์์ ์ฝ๋์ ๋์ผํ๋ฉฐ, ํ์ค๋ก ๋ ์ฝ๋๋ {} ์๋ต ๊ฐ๋ฅ

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('๐', '๐'); // ๋ค๋ก ์ถ๊ฐ๋จ
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // ๋ค์ ์๋ ์ธ์๊ฐ ๋น ์ง๊ฒ ๋จ
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('๐', '๐'); // ์์์๋ถํฐ ์ถ๊ฐ
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift(); // ์์์๋ถํฐ ๋น ์ง
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push shift๋ unshift๋ ๋๋ฌด ๋๋ฆผ
// ๋ค์์๋ ๋ฃ๊ณ  ๋นผ๋๊ฒ ์ฝ๊ฒ ๊ฐ๋ฅํ์ง๋ง, ์์๋ ์ฎ๊ธฐ๊ณ  ํด์ผํด์ ์ค๋ ๊ฑธ๋ฆฌ๊ฒ ๋จ
// splice: remove an item by index position
fruits.push('๐', '๐', '๐');
console.log(fruits);
fruits.splice(1, 1); // splice ์ฌ์ฉ์์ ์์ ์ธ๋ฑ์ค๋ฅผ ์ง์ ํ๊ณ  ๋ช๊ฐ๋ฅผ ์ง์ธ์ง ์ง์ ํ์ง ์์ผ๋ฉด ๋ํดํธ๊ฐ์ผ๋ก ๊ทธ๊ฐ๋ถํฐ ์ดํ์ ๊ฐ๋ค์ ์ง์๋ฒ๋ฆผ
console.log(fruits);
fruits.splice(1, 1, '๐', '๐'); // ์ง์ฐ๊ณ ๋์ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ๋ฃ๋ ๊ฒ๋ ๊ฐ๋ฅ, ์ง์ฐ๊ณ  ์ถ์ง์๋ค๋ฉด 0์ ์ ์ผ๋ฉด ์ง์ฐ์ง์๊ณ  ๋ฐ์ดํฐ ์ฝ์ ๊ฐ๋ฅ
console.log(fruits);

// combine two arrays
const fruits2 = ['๐', '๐ฅฅ'];
const newFruits = fruits.concat(fruits2); // concat์ ์ด์ฉํ์ฌ ๋ฐฐ์ด์ ํฉ์น  ์ ์์
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐')); // indexOf๋ก ๋ช๋ฒ์งธ ์ธ๋ฑ์ค์ ์๋์ง ํ์ธ์ด ๊ฐ๋ฅ
console.log(fruits.indexOf('๐')); 
console.log(fruits.indexOf('๐ฅฅ')); // indexOf์์ ๋ฐฐ์ด์์ ์๋ค๋ฉด -1์ ์ถ๋ ฅ

// includes
console.log(fruits.includes('๐')); // ๋ฐฐ์ด์์ ์๋ค๋ฉด true, ์๋ค๋ฉด false๋ฅผ ์ถ๋ ฅ
console.log(fruits.includes('๐ฅฅ')); // false๋ฅผ ์ถ๋ ฅ

// lastIndexOf
console.clear();
fruits.push('๐'); // ๊ฐ์ ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐํ  ๊ฒฝ์ฐ
console.log(fruits);
console.log(fruits.indexOf('๐')); // ๊ฐ์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง๊ณ  ์๋ค๋ฉด ๊ฐ์ ๋ฐ์ดํฐ๊ฐ์ ์ฒซ๋ฒ์งธ ์ธ๋ฑ์ค ๊ฐ์ ๊ฐ์ ธ์ด
console.log(fruits.lastIndexOf('๐')); // ๊ฐ์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง๊ณ  ์๋ค๋ฉด ๊ฐ์ ๋ฐ์ดํฐ๊ฐ์ ์ ์ผ ๋ง์ง๋ง ์ธ๋ฑ์ค ๊ฐ์ ๊ฐ์ ธ์ด

