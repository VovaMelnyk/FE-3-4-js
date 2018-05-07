// create
// function calc() {
//     console.log('inside text');
// }
// calc();


// call

// function add() {
//     console.log(5 + 6);
// }
// add();
// let calc = function () {
//     console.log('inside text');
// };
// calc(); // move top



// return
//
// function showText() {
//     let str = 'I am function';
//    return str;
// }
//
// console.log(showText()+1);
// let a = 30;
// let b = 40;
// function addNumbers() {
//     let a = 5;
//     let b = 6;
//     function nember2() {
//         let a = 10;
//         let b = 20;
//         return innerFunction()+ a + b;
//         function innerFunction() {
//                 // let a = 100;
//                 // let b = 200;
//             return a + b;
//         }
//     }
//     return nember2() + a + b;
// }
// let result = addNumbers();
// console.log(result);
// console.log(addNumbers());
//
// function showText() {
//     let str = 'I am function';
//     return str;
// }
//
// console.log(showText());


// function calc (number1, number2) {
//     return number1 + number2;
// }
// //
// console.log(calc(5,6));
// console.log(calc(10,100));
// console.log(calc('10','100'));
// function arrSum(arr) {
//     let total = 0;
//     for (let item of arr) {
//         total += item;
//     }
//     return total;
// }
//
// console.log(arrSum([1, 2, 3, 5, 6, 10]));

// function calc (number1, number2) {
//     return number1 + number2;
// }
//
// console.log(calc(5,10));
// console.log(calc(20,30));
// console.log(calc(5, 'function'));
//
// function minus(a, b) {
//     return a - b;
// }
//
// console.log(minus(5, 2));
// console.log(minus(2, 5));

// default parameters
// function showText(name, days) {
//     return `${name} has trial version ${days} days`;
// }
// console.log(showText());

// function showText(name = 'Jim', days = 30) {
//     return `${name} has trial version ${days} days`
// }
// console.log(showText(20,'Mick'));
// 1) Написати функцію що приймає в себе строку
// 2) Перевіряє чи є сторока паліндромом
// 3) Повертає true чи false
// 4) A man, a plan, a canal. Panama
// 5) split, reverse. join

// function pol(str) {
//     let original = str.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
//     let reverseStr = original.split('').reverse().join('');
//     // if (original === reverseStr) {
//     //     return true
//     // } else  {
//     //     return false
//     // }
//     return original === reverseStr ? true : false;
//
// }
//
// console.log(pol('A man, a plan, a canal. Panama'));


// function checkPalindrome(string) {
//     let modString = string.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
//     let palindrom = modString.split('').reverse().join('');
//     if (modString === palindrom) {
//         return true
//     } else {
//         return false
//     }
//     // return modString === palindrom ? true : false;
//     // return modString === palindrom;
// }

// console.log(checkPalindrome("A man, a plan, a canal. Panama"));


// console.log(showText());
// console.log(showText('Tim', 15));

// Scope
// global Window
// local
// let test = 'Global scope';

// 'use strict'
// function  local() {
//     let test = 'Local scope'; // remove let
//     console.log(test);
// function inner() {
//     let test = 'Phone';
//     return test;
//     console.log(test);
// }
// return inner();
// }

// console.log(local());
// console.log(test);

// const a = 20;
// const b = 10;
//
//  function add () {
//     const a = 5;
//     return a + b;
// };
//
// console.log(add());

// // arguments
// function pow (base, exponent) {
//     return Math.pow(base, exponent);
// };

// console.log(`2 ** 10 =  ${pow(2, 10)}`); // "2 ** 10 =  1024"

// console.log(`10 ** 2 =  ${pow(10, 2)}`); // "10 ** 2 =  100"
//
// function arg() {
//     // arguments = 1,5,9,12;
//     // return arguments;
//     // arguments;
//     let arr = Array.from(arguments);
//     console.log('Array arguments', arr);
//     let sum = "";
//     for (let item of arr) {
//         sum += item + ' ';
//     }
//     return sum;
// }
//
// console.log(arg(1,5,9,12,1,100));
// console.log(arg(5,9));
// console.log(arg('test', 'string', 'hello'));

// let checkWachek = ['Henry Every', 'Mick', 'Den', 'Alex', 'Michael', 'Katya', 'pvg'];
//
// let check = (checkWachek[(Math.floor(Math.random() * checkWachek.length))]);
// alert(check);

// let a = 100;
//
// function showNumber() {
//     let a = 10;
//     console.log(a);
//     function number() {
//         let a = 5;
//         console.log(a);
//     }
//
//     number();
// }
//
// showNumber();
//
// let sum = function (a, b) {
//     return a + b;
// };
//
// sum(5,10);

// let minus = function min (a, b) {
//     return min(5,6);
// };
//
// minus();

// Clousure
// function generator(input) {
//     let number = input;
//     function rise() {
//         return number * 2;
//     }
//     return rise();
// }

// let launchFirst = generator(500);
// console.log(launchFirst);
// console.log(launchFirst);
// console.log(launchFirst);
// console.log(result());
// console.log(result());

// let launchSecond = generator(300);
// console.log(launchSecond());

// function sum (a,b) {
//     if (isNaN(a) || isNaN(b)) {
//         return;
//     } else {
//         console.log(arguments);
//         console.log(Array.from(arguments));
//         return a + b;
//
//     }
// }

// let result = sum(1,10);
// console.log(result);

//


// let x = 10;
// function foo(a) { // 5
//     let b = 20; // b 20
//
//     function bar(c) { // c 15
//         let d = 30;  // d 30
//         return boop(x + a + b + c + d);
//     }
//
//     function boop(e) { // e 80
//         return e * -1;
//     }
//
//     return bar;
// }
//
// let moar = foo(5); // Closure
// moar(15);
//
// let password = 'xh38sk';

// function secretPassword() {
//     let password = 'xh38sk';
//         function guessPassword(guess) {
//             if (guess === password) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     return guessPassword;
// }
// let passwordGame = secretPassword();
// console.log(passwordGame);
// let tryOne = passwordGame('heyisthisit?');
// let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);

// Guard Clause
// const printArray = function (arr) {
//     if(!Array.isArray(arr)) {
//         console.log('Error');
// return "Error";
// }
// for(let value of arr) {
//     console.log(value);
// }
// };

// printArray( [1, 2, 3, 4] ); // 1, 2, 3, 4
// printArray( [5, 10, 15, 20] ); // 5, 10, 15, 20
// console.log(printArray('some string')); // undefined

// IIFE
// LS
// (function calc() {
//     console.log("calc");
// })();

// let x = 5;

// ;(function () {
//     let x = 10;
//     let y = 20;
//
//     console.log(x);  // 10
//     console.log(y);  // 20
// })();
//
// console.log(x);  // 5
// console.log(y); // Uncaught ReferenceError, y is not defined


// cb

// const printString = function (cb) {
//     console.log( cb() );
// };

/*
  Создайте функцию titleCase(str), которая
  получает строку и возвращает предоставленную строку
  с первой буквой каждого слова, заглавными.
  Остальные буквы слова должны быть не заглавными.
*/
// function titleCase(str) {
//     if (typeof str !== 'string'){
//         return
//     }
//     let lowCa = str.toLowerCase();
//     let splCa = lowCa.split(' ');
//     let newArra = [];
//     for (let word of splCa) {
//         let custo = word.replace(word[0],word[0].toUpperCase());
//         newArra.push(custo);
//     }
//     return newArra.join(' ')
// }
// // Вызовы функции для проверки
// console.log(
//     titleCase("I'm a little tea pot")
// ); // вернет "I'm A Little Tea Pot"
//
// console.log(
//     titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".
//
/*
  Есть массив уникальных чисел uniqNumbers.

  Написать функцию, addUniqNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

// const uniqNumbers  = [2, 1, 4, 9];
// function addUniqNumbers() {
//     let arr = Array.from(arguments);
//     console.log(arr);
//     for(let number of arr){
//         if(!uniqNumbers.includes(number)){
//             uniqNumbers.push(number)
//         }
//     }
// }

// Вызовы функции для проверки
// addUniqNumbers(1, 2, 3);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3]

// addUniqNumbers(12, 2, 3, 19);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19]

// addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//     uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]


/*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.

  При вызове функции, первым аргументов всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*/

// function removeFromArray(arr) {
//     let newArr = Array.from(arguments);
//     console.log("newArr1", newArr);
//     newArr.shift();
//     console.log("newArr2", newArr);
//     for (let item of newArr){
//         if(arr.includes(item) ) {
//           let index = arr.indexOf(item);
//           arr.splice(index,1);
//         }
//     }
//     return arr;
// }


// Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // вернет [1, 3, 5]
//
// console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // вернет [12, 8, 17]
// const getString = function () {
//     return "Some text";
// }
//
// printString(getString); // "Some text"

// function sum(a,b) {
//     return a + b;
// }

// let sum = (a,b) => {
//     return a + b
// };
// console.log(sum(5, 10));
//
// let showText = text => console.log(text);
//
// showText('test');

// let sum = (a,b) => a + b;

// const guessNumber = (num) => {
//     const userNumber = Number( prompt('Введите число', '') );
//
//     return num === userNumber
//         ? "Поздравляем! Вы угадали секретное число"
//         : "Сожалеем! Вы не угадали секретное число";
// };
//
// const showMessage = (cb) => {
//     const secretNumber = 15;
//     const msg = cb(secretNumber);
//
//     alert(msg);
// };
// showMessage(guessNumber);

// function mylt(number) {
//     return number * 2;
// }
//
// mylt(10)
//
// function sum(parametr) {
//     let a = 5;
//     let b = parametr(a); // mylt(a)
//     return a + b;
// }
//
// let result = sum(mylt);
// console.log(result);

// resursion
// 
// const pow = (base, exponent) => {
//     if (exponent === 0) return 1;
//
//     return base * pow(base, exponent - 1);
// };
//
// console.log( pow(2, 3) ); // 8

// return 2 * pow(2, 3-1); // 8
// return 2 * pow(2 , 2-1); //4
// return 2 * pow(2, 0) //2


// const pow2 = (2,3) => {
//     if (exponent === 0) return 1;
//
//     return base * pow(base, exponent - 1);
// }


// map
// let arr = [0,2,4];
// const addOnee = arr.map(function (element) {
//     return element * 2;
// });
// console.log(arr);
// console.log(addOnee);
// const addOne = arr.map(n => n + 1);
// console.log(addOne); // [1, 3, 5]
// к значению массива добавим значение позиции этого числа
// const numbers = [0, 2, 4, 6, 8, 10];
// const flipFlop = numbers.map(function (element, index) {
//     return element + index
// });
// console.log(flipFlop);
// const flipFlop = numbers.map((element, index) => element + index);
// console.log(flipFlop);
//
// const addPosition = odd.map((n, i) => n + i);
// console.log(addPosition); // [0, 3, 6, 9, 12, 15]
// // filter


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const even = numbers.filter(function (el) {
// if (el > 5) {
//     return el
// }
// return el === 5 ? el : null;
// });
// console.log(even);

// const even = numbers.filter(n => n % 2 !== 0);
// console.log(even); // [1, 3, 5, 7, 9]
//
// // find
// const login = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
// console.log(login.indexOf('Newton'));
// let result = login[login.indexOf('Newton')];
// console.log(result);
// let findLlogin = login.find(function (item) {
//     return item === 'Newton';
// });
// console.log(findLlogin);

//
// const findLogin = login.find(item => item === 'Einstein' );
// console.log(findLogin);
//
// // reduce
// const hoursWorkedPerWeek = [9, 8, 8, 8, 10, 5];
//
// const totalPerWeek = hoursWorkedPerWeek.reduce(
//     (current, next) => current + next
// );
// console.log(totalPerWeek); // 48
//
// // every
//

// const money = [100,'500',300,250, 5, true]; //[true, true, true, true]
// const go1 = money.every(function (element) {
//     return typeof element === 'number';
// });
// console.log(go1);
// const go = money.every(item => item >=100);
// console.log(go);
//
// // some
//
// const money2 = [100,500,300,250];
// const go = money2.some(function (element) {
//     return element >=500
// });
// console.log(go);
// const go2 = money2.some(item => item >=500);
// console.log(go2);
//
// // sort -1 and 1
// let numbers2 = [4, 2, 5, 1, 3, 11];
// numbers2.sort(function(a, b) {
//  if (a > b) {
//   return -1
//  } else {
//   return 1
//  }
//     return a - b;
// });
// console.log(numbers2.sort());
// console.log(numbers2); // [1, 2, 3, 4, 5]
//

// function factorial (num){
//     if(num === 1){
//         return 1
//     }
//     return num * factorial(num-1)
// }
// console.log(factorial(5));
// function sum (num){
//     if(num === 1){
//         return 1
//     }
//     return num + sum(num-1)
// }
// console.log(sum(100));

// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел var arr = [5, 6, 7, 8, 9];
// let arr = [5, 6, 7, 8, 9];
// let newArr = arr.map(el => { return el*el; }) // квадрат
//     .filter( el => { return el > 40 }) // фільтр більше 40
//     .reduce((curent, item) => { return curent + item }); // додавання
// console.log(newArr)
// let news = newArr.filter(function(el){
//   return el > 40
//
// })

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля. let arr = [5, 6, 7, 8, 9];
//Якщо цифри більше нуля ?повертаємо парні, :непарні.
// let arr = [5, 6, 7, -8, 9];
// let result = arr.every(element => {
//
//     return element > 0;
// })
//
// if (result) {
//     let even = arr.filter(function (el) {
//         if (el % 2 === 0) {
//             return el;
//         }
//
//
//     })
//     console.log(even);
// }
// else {
//     let odd = arr.filter(el => {
//         // return el % 2 !== 0 ? el : null
//         if (el % 2 !== 0) {
//             return el;
//         }
//     })
//     console.log(odd);
// }
//
// console.log(result);


// calc();
// console.log(arrSum([10, 20, 100, 35]));
