// Synchronous code - все відбувається по черзі
// console.log('First');
// console.log('Second');
// console.log('Third');

// Asynchronous code


// console.log("Hello.");
//
// setTimeout(function() {
//     console.log("Goodbye!");
// }, 2000);
//
// console.log("Hello again!");

// Say "Hello."
// Do nothing for two seconds.
// Say "Goodbye" two seconds from now.
// Say "Hello again!"

// Say "Hello."
// Say "Hello again!"
// Do nothing for two seconds.
// Say "Goodbye!"


// setTimeout и setInterval.

// const timerId = setTimeout(callback, delay);

// function sayHello() {
//     console.log("Hello!");
// }

// const timerId = setTimeout(sayHello, 5000);
// let btn = document.querySelector('.stop');
// btn.addEventListener('click', function () {
//     clearTimeout(timerId);
//     console.log('timer stop');
// });
// const timerI = setTimeout(sayHello, 2000);
// const timerID = setTimeout(sayHello, 3000);
// console.log(timerId);
// console.log(timerI);
// console.log(timerID);


// clearTimeout(timerId);

// const timerId = setInterval(callback, delay);

// const timerID = setInterval(() => {
//     console.log(`I love async JS! ${Date.now()}`);
// }, 1000);
// const intervalID = setInterval(() => {
//     console.log(1);
// }, 10);

// let btn = document.querySelector('.stop');
// btn.addEventListener('click', function () {
//    clearInterval(intervalID);
// });

// this

// const obj = {
//     classicFoo() {
//         setTimeout(function() {
//             console.log(`in object scope`, this); // window
//         }, 1000);
//     },
//     arrowFoo() {
//         setTimeout(() => {
//             console.log(`in object scope`, this); // obj
//         }, 1000);
//     }
// };

// setTimeout(function() {
//     console.log(`in global scope`, this); // window
// }, 1000);

// setTimeout(() => {
//     console.log(`in global scope`, this); //window
// }, 1000);

// obj.classicFoo(); // window
// obj.arrowFoo(); // obj

// Затримка в 4 мс зменьшення частоти в неактивній вкладці

// Date
//
// let date = new Date();
// console.log(date);

// let date = new Date("March 4, 2017");
// console.log(date);
// console.log(date.getDay());

// new Date(year, month, date, hours, minutes, seconds, ms);

// let dat = new Date(2000, 5, 8, 12, 0, 0, 0);
//
// console.log(dat);
//
// let date = Date.now();
// //
// console.log(date/1000/3600/24/365);

// let date = new Date();
// console.log("Date: " + date);
// console.log("getDate(): " + date.getDate());
// console.log("getDay(): " + date.getDay());
// console.log("getMonth(): " + date.getMonth());
// console.log("getFullYear(): " + date.getFullYear());
// console.log("getHours(): " + date.getHours());
// console.log("getMinutes(): " + date.getMinutes());
// console.log("getSeconds(): " + date.getSeconds());
// console.log("getMilliseconds(): " + date.getMilliseconds());
// console.log("getTime(): " + date.getTime());
// let birth = prompt('enter year of birth');
// let today = new Date();
// console.log(today.getFullYear() - birth);


// let date = new Date();
// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of the week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0
//
// result += ' Time: ' + date.getHours() + ':'; // часы
// result +=  date.getMinutes() + ':'; // минуты
// result +=  date.getSeconds() + ':'; // секунды
// result +=  date.getMilliseconds() + ''; // милисекунды
//
// console.log(result);

// let secondDate = new Date ();
// secondDate.setFullYear(2017, 6, 14);
// secondDate.setHours(5, 40, 0, 0);
// console.log(
//     `Set: дате 2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`
// );
// console.log(
//     `Set: дате 2017, 6, 14, 5, 40 соответствует ${secondDate.getFullYear()}`
// );

// let date = new Date();
// //
// // формат вывода
// const options = {
//     weekday: 'long',
//     year    : 'numeric',
//     month   : 'short',
//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit'
// };
//
// Україна
// let localeUk = date.toLocaleString('UA-ua', options);
// console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM


// for (var i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log(i + " second(s)");
//     }, i * 1000);
// }

// for (var i = 1; i <= 3; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i + " second(s)");
//         }, i * 1000);
//     })(i);
// }

// for (let i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log(i + " second(s)");
//     }, i * 1000);
// }


// let deadline = new Date(2018, 7, 24, 12, 0, 0);
// function timer() {
//     let today = new Date();
//     let result = deadline - today;
//     console.log(result / 1000 / 3600 / 24);
//     let days = Math.floor(result / 1000 / 3600 / 24);
//     console.log(days);
//     document.querySelector('.days').textContent = days;
//     let hours = Math.floor((result - days * 1000 * 3600 * 24) / 1000 / 3600);
//     document.querySelector('.hours').textContent = hours;
//     let minutes = Math.floor((result - (days * 1000 * 3600 * 24) - (hours * 1000 * 3600)) / 60000);
//     document.querySelector('.minutes').textContent = minutes;
//     let seconds = Math.floor((result - (days * 1000 * 3600 * 24) - (hours * 1000 * 3600) - (minutes * 60000))/1000);
//     document.querySelector('.seconds').textContent = seconds;
// }
//
// setInterval(timer,1000);

let deadline = new Date(2018, 7, 24, 12, 0, 0);

function timer() {
    let dateNow = new Date();
    let diff = deadline - dateNow;
    let sec = Math.floor(diff / 1000);
    console.log(sec);
    let min = Math.floor(sec / 60);
    console.log(min);
    let hour = Math.floor(min / 60);
    console.log(hour);
    let day = Math.floor(hour / 24);
    console.log(day);
    sec = sec % 60;
    min = min % 60;
    hour = hour % 24;
    document.querySelector('.seconds').textContent = (sec < 10) ? '0' + sec : sec;
    document.querySelector('.minutes').textContent = (min < 10) ? '0' + min : min;
    document.querySelector('.hours').textContent = (hour < 10) ? '0' + hour : hour;
    document.querySelector('.days').textContent = (day < 10) ? '0' + day : day;
}


setInterval(timer, 1000);