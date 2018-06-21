// pending - ожидание
// fulfilled - выполнено успешно
// rejected - выполнено с ошибкой

//
// const promise = new Promise((resolve, reject) => {
// // Эта функция будет вызвана автоматически
//
// // В ней можно делать любые асинхронные операции.
// // Когда они завершатся — нужно вызвать одно из:
// // resolve(результат) при успешном выполнении
// // reject(ошибка) при ошибке
// });


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success!");
//     }, 2000);
// });
// //
// console.log("BEFORE promise.then");
// promise
//     .then(data => {
//     console.log("INSIDE promise.then");
//     console.log(data); // "success!"
// });
// console.log("AFTER promise.then");

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("error!");
//     }, 2000);
// });
// // //
// // // выполнится через 2 секунды, когда будет готов результат обещания
// promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err)); // "error!"

// const makePromise = (text, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(text), delay));
//
// const promiseA = makePromise("promiseA", 1000);
// const promiseB = makePromise("promiseB", 3000);
//
// // выполнится спустя 3 секунды,
// // когда выполнится второй промис с задержкой в 3c.
// // Первый выполнится через секунду и просто будет готов
// Promise.all( [promiseA, promiseB] )
//     .then(result => {
//         console.log(result); //["promiseA result", "promiseB result"]
//     })
//     .catch(err => console.log(err));

// const makePromise = (text, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(text), delay));
// //
// const promiseA = makePromise("promiseA", 4000);
// const promiseB = makePromise("promiseB", 2000);
// console.log(promiseA);
// console.log(promiseB);
//
// // выполнится спустя 1 секунду, когда выполнится
// // самый быстрый promiseA с задержкой в 1c.
// // Второй промис promiseB будет проигнорирован
// Promise.race( [promiseA, promiseB] )
//     .then(result => {
//         console.log(result); // promiseA
//     })
//     .catch(err => console.log(err));

// let myPromise = new Promise(function (resolve, reject) {
//    let isDone = false;
//
//    if(isDone){
//        resolve('this is done');
//    } else {
//        reject('error')
//    }
// });

// myPromise
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
//
// console.log('hello');


// const myPromise = function (number) {
//         return new Promise(function (ok, error) {
//             if (number === 10) {
//                 ok(number + 100);
//             } else {
//                 error(new Error());
//             }
//         })
//
// };
// //
// myPromise(10)
//     .then(function (data) {
//         console.log(data);
//     }).catch(function (error) {
//     console.log(error);
// });


// const promise = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve('Data back from server');
//     },1000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     },2000);
// });
// //
// promise
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
//

// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Homer', 'Bender', 'Filip']);
//     }, 2000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 3000);
// });
//
// promiseNames
//     .then(answer =>{return answer})
//     .then(data => {
//         for (let item of data) {
//             console.log(item);
//         }
//     })
//     .catch(error => console.log(error));
//
// const promiseSurnames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Simpson', 'Rodriges', 'Fry']);
//     }, 5000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 5000);
// });
// //
// Promise.all([promiseNames, promiseSurnames])
//     .then(data => {
//         console.log(data);
//         // result = data;
//         const [names, surnames] = data;
//         for (let i = 0; i < names.length; i++) {
//             console.log(`${names[i]} ${surnames[i]}`);
//         }
//         console.log('names', names);
//         console.log('surnames', surnames);
//         return names;
//     })
//     .then(function (result) {
//         return result.join('')
//     })
//     .then(function (str) {
//         // console.log(str);
//     })
//     .then()
//     .then()
//     .then();
// console.log(result);
// const [name, lastname] = [['Homer', 'Bender', 'Filip'], ['Simpson', 'Rodriges', 'Fry']];
// let [a, b, c, d, e] =[1,5,10,12,151];
// console.log(e);

let container = document.querySelector('#root');
let string = '';
console.log(fetch('https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=yellow+flowers&image_type=photo&pretty=true&per_page=6'));
// .then(data => data.json())
    // .then(data => {
    //         console.log(data.hits);
    //         for (let pic of data.hits) {
    //             string+=`<img src=${pic.webformatURL} alt=${pic.tags}>`
    //         }
    //         container.innerHTML = string;
    //     }
    // )
    // .catch(error => console.log(error));


// let arr = [5, 6, 8, 9, 78];
//
// const [a, b, c, d ,e] = arr;
//
// console.log(a, b, c);

class Hamburger {
    constructor(size){
        this.size = size;
    }

    // showSize(){
    //
    // }

    showSize = ()=> {
        return this.size;
    }
}
