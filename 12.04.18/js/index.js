// JS чутливий до регістру

 /*
 user;
 User;
 uSer;
 */

// це все 3 різні змінні

// Create variables

/*var x = 5;
console.log(x);
let y = 10;
console.log(y);
const z = 50;
console.log(z);*/

// const

/*
var x = 5;
x = 20;
console.log('first', x);
// -------------------------
x = 5;
console.log('second',x);
*/

// let y = 10;
// y = 30;
// console.log(y);
//
// const z = 50;
// z = 60;
//
// console.log(z); // Error



// duplicate declared
// var x = 5;
// var x = 10;
// console.log(x);

// let y = 20;
// let y = 30;
// console.log(y); // Error
//
// const z = 50;
// const z = 60;
// console.log(z); // Error

// Hoisting

// console.log(x); // undefined
// var x = 5;

// console.log(y); // is not defined
// let y = 10;
//
// console.log(z); // is not defined
// const z = 50;

// var c;
// let a;

// const b;

// let b = 10;
// let d = 2.65;
// let y = '2';
// let a = 'text';
// // let c = text;
// let z = true;
// let f = false;
// let p = 'true';
// let r = "false";

// let a = null;
// let b = undefined;
/*

let a = {
  name: 'Eminem',
  age: 12,
  isRaper: false,
};
console.log(a);
let jigul = {
  weels: 3,
  color: 'red',
  isCar: false,
  condition: false,
};

let user = {
    name: 'Ivan',
    age: 5,
    gender: 'male',
    mail: 'abc@com',
    isLogin: false,
    private: {
        password: '12243sdsds4',
        creditCard: 12574852478,
    },
};

let user2 = {
    name: 'Ivan',
    age: 5,
    gender: 'male',
    mail: 'abc@com',
    password: '1232434',
    isLogin: false,
};
let z = Symbol('a');
let b = Symbol('a');
console.log(z === b);
*/

// Number
// let x = 10;
// console.log(typeof x);

// String
// let y = 'Hello World';
// console.log(typeof y);

// Boolean

// let z = true;
// console.log(typeof z);

// null

// let t = null;
// console.log(typeof t); // object

// undefined

// let b = undefined;
// console.log(typeof b);

// object
// let q = {
//     name: 'Mango',
//     age: 25,
// };
//
// console.log(typeof q);

// function a() {
//     return a
// }
//
// console.log(typeof a);

// Вивід інформації на екран

// alert('Hello World');
// document.write(55);
// console.log('true');

// Запит інформації в користувача

// let question = confirm('are you student?');
// console.log(question); // boolean
//
// let question2 = prompt('How old are you?');
// console.log(question2); // string
// console.log(typeof question2);

// +
//
// let a = 5;
// let b = 10;
// console.log(a + b); // 15
// let a = 5;
// let b = 6;
// // console.log(a += b); // 11
// console.log('before',a);
// // a = a + b;
// // let c = a + b;
// // a = c;
// // a += b
// console.log('after',a);

// let a = 5;
// console.log(a++); // 5
// console.log(a);
// console.log(++a); // 7

 /*let a = 'Join ';
 let b = 'us ';
 let c = 'now' ;
console.log(a + b); // Join us*/

/*
let a = 3;
let b = 'join';
let c = ' ';
console.log(a + c + b ); // 3 join
*/

/*let a = true;
let b = ' join';
console.log(a + b); // true join*/

/*let a = 12;
let b = '1';
console.log(a + b); // 121 */

// console.log(20 + 30 + 50 +'2');


/*let a = true;
 let b = 12;
console.log(a + b); //13*/

/*
let a = true;
let b = true;
console.log(a + b); //2*/

/*let a = true;
let b = false;
console.log(a + b); // 1*/

/*let a = 12;
let b = null;
console.log(a + b); //12*/

/*let a = undefined;
let b = 10;
console.log(a+b); //NaN
console.log(typeof NaN);*/

/*
let a = null;
let b = ' join';
let c = 0;
console.log((a + c) + b ); // undefined join
*/

// -

/*let a = 10;
// a--;
console.log(a--); //9
console.log(--a);*/

/*let a = 'join us';
let b = 'us';
console.log(a - b); // NaN*/

/*
let a = 10;
let b = '1';
console.log(a - b); //9
*/

// *

/*
let a = 10;
console.log(a*a); // error
*/

// let a = 2;
// let b = '2.2';
// console.log(a * b); // 4.4

/*let a = 2;
let b = 'start';
console.log(a * b); //NaN*/

// let a = 5;
// let b = null;
// console.log(a * b); // 0

// let a = Infinity;
// let b = 100;
// console.log(a * b); //Infinity

// /
// let a = 10;
// let b = '2';
// console.log(a / b); // 5

//
/*
let a = 10;
let b = 'two';
console.log(a / b); // NaN
*/

// let a = 10;
// let b = 0;
// console.log(a / b); // Infinity

// let  a = 10;
// let b = Infinity;
// console.log(a / b); //0
//
// let a = 156;
// let b = 9;
// console.log(a % b); //1

// let a = 2.1;
// let b = 2.55;
// let c = a * b;
// let d = c.toFixed(3);
// console.log(+d); // 5.355

// console.log(parseInt('10px'));
// console.log(parseFloat('25.5px'));
// console.log(parseInt('aas20'));
// console.log(parseFloat('a25.5'));


// console.log((1.3*2.2));

// let name = prompt('Enter your name');
// let age = prompt('Enter your age');
//
// console.log(`My name is ${name} and i am ${age}`);


// let a = 'Hello';
// console.log(a[2]);
//
// let b = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis dolores impedit molestiae nesciunt numquam placeat qui recusandae! Amet culpa eos iusto perferendis reiciendis sunt velit voluptatem. Commodi, esse, tempora?';
//
// console.log(b.length);
// let a = 'Hello';
// console.log(a.length);
// console.log(b[12]);

// let c = 'Hello';
// console.log(c.toLowerCase());
// console.log(c.toUpperCase());

// let d = 'Hello World';
// let splitWord = d.split('');
// console.log(splitWord);
// console.log(splitWord.join(''));

// let c = 'h+el+l+o';
// let result = c.split('+');
// console.log(result);
// let line = result.join('');
// console.log(line);

// let d = 'H+el+l+0';
// d = d.split('+').join('');
// console.log(d);

// let a = 'Hello';
// let b = 'World';
// let c = ' ';
//
// console.log(a.concat(c, b));
//  let b = 'Hello';
// console.log(b[b.length-1]);// [4]
// console.log(b.substring());

// let a = 'hero';
// console.log(a.substring(1,3));
// console.log(a.substr(1,3));

// let c = "Hello";
// console.log(c.charAt(0));
// console.log(c[0]);
//
// let b = 'Hello';
// console.log(b.endsWith('lo'));
// console.log(b.startsWith('h'));
// console.log(b.includes('r'));
// console.log(b.indexOf('lo'));
// console.log(b.repeat(5));