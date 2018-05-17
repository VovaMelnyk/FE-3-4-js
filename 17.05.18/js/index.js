let account = {
    cash: 12000,
    spend: function (amount) {
        this.cash -= amount;
        console.log(`New balance is ${this.cash}`);
    },
    deposit: function (amount) {
        this.cash += amount;
        console.log(`New balance is ${this.cash}`);
    }
};

// console.log(account);
// acount.spend(1000);
// acount.deposit(50000);
// console.log('new balance', account);
// function add (a, b) {
//     return a + b;
// }
//
// let window = {
//   add: function (a, b) {
//       return a +b;
//   }
// };
// add(5,6);
// window.add(5,6);


// account.id = 'ID000-1';
// console.log(account.id);
// account.id = 'ID000-3';
// console.log(account.id);

// Object.defineProperty(account,'id', {
//    value: 'ID000-1',
//     writable: true,
//     enumerable: true,
// });
// console.log(account);
// console.log(account.id);
// account.id = 'ID000-3';
// console.log(account.id);


// Обєкт являється контекстом виконання ф-ї
// const petya = {
//     name: 'Petya',
//     showName() {
//       console.log(this.name);
//     }
//   };
//
// petya.showName();

// всі ф-ї це обєкти і коли вона виконується то отримує властивість this з силкою на обєкт в контексті якого вона викликається.
// this використовується для доступу до методів і властивостей обєкта який викликає ф-ю. Ми не завжди можемо знати імя обєкта
// підстановка замість this назви обєкту
// function showName() {
//     console.log(this);
// }
//
// showName();
// const petya = {
//     name: 'Petya',
//     age: 30,
//     rich: false,
//     showName() {
//         return `${this.name}`;
//     },
//
//     showFullInfo() {
//         return `My name is ${this.showName()} i am ${this.age} old and i am have many $ ${this.rich}`;
//     }
// };

// console.log(petya.showName());
// console.log(petya.showFullInfo());
// const person = {
//     name: "Kolian",
//     age: 27,
//     details: {
//         hobbies: ['Sports', 'Music'],
//         location: 'USA'
//     },
//
//     greet: function () {
//         console.log(`My name is ${this.name}`);
//         console.log(this);
//     }
// };
// // ctx
// console.log(person.greet());
// console.log(greet() === window.greet());

// function greet() {
//     console.log(this);
// }
// greet();

// const changeCTX = greet;
// console.log(changeCTX());
// const changeCTX = person.greet.bind(this);


// This визначається в момент виклику ф-ї
// function showThis() {
//     console.log(this);
//   }
// showThis();
// function test() {
//     return showThis();
// }
// test();
// let obj = {
//     testThis: showThis
// };
//
// obj.testThis();

// 'use strict';
//   function fn() {
//     console.log(this);
//   }
//   fn();

// this in obj method
// const petya = {
//     name: 'Petya',
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.name);
//     },
//   };
//
//   petya.showThis();
//   petya.showName();

// function showName() {
//     console.log('this in showName: ', this);
//     console.log("this.name: ", this.name);
//   }

// //   showName();

// const user = { 
//     name: "Poly"
//  };
// user.show = showName;

// user.show();

// this in arrow functions 
// this визначається місцем створення а не виклику
// const showName = () => console.log('In showName: ', this);
//
// showName();
//
// const user = {
//     name: 'Mango',
//     showName2: () => console.log('In showName2: ', this)
// };
// user.show = showName;

// user.show();
// user.showName2();
// const hotel = {
//     name: 'Resort',
//     showThis: function () {
//       const test = () => {
//           return this
//       };
//       console.log( test() );
//     },
//     //  test: () => {
//     //     return this
//     // }
//   };

// hotel.showThis();
// console.log(hotel.test());

// const hotel = {
//     name: "Resort Hotel",
//     showName: () => console.log('this: ', this)
//   };
//   hotel.showName();
//
// const hotel = {
//     name: "Resort Hotel",
//     showThis() {
//       console.log(this);
//     }
//   };
// hotel.showThis();
//
// const fn = function (callback) {
//     callback();
//   };

// fn(hotel.showThis);

// call apply bind 

// const hotel = {
//     name: 'Resort Hotel'
// };
// const hotel2 = {
//     name: '4 Seasons Hotel'
// };
//
// const hotel3 = {
//     name: '7 days Hotel'
// };
//
// let eduardInfo = ['Eduard', 25, 10];
//
// const hello = function(client, age, duration) {
//     return `${client} welcome to ${this.name} i am ${age} i live here ${duration} days !`
// };
// call - coma
// apply - Array
// console.log(hello.apply(hotel, eduardInfo));

// console.log(hello.call(hotel, 'Edyard', 36, 10));
// console.log(hello.call(hotel2, 'Edyard', 25, 7));
// console.log(hello.call(hotel3, 'Jony'));
// hotel.wellcome = hello;
// console.log(hotel.wellcome());
// hotel2.wellcome = hello;
// console.log(hotel2.wellcome());
// hotel3.wellcome = hello;
// console.log(hotel3.wellcome());
//  delete hotel.wellcome;
//  console.log('welcome' in hotel);
//  delete hotel2.wellcome;
 // console.log('welcome' in hotel2);
 // delete hotel3.wellcome;
 // console.log('welcome' in hotel3);
// call
// hotel.wellcome = hello;
// console.log(hotel.wellcome());
//  delete hotel.wellcome;
//  console.log('welcome' in hotel);
// console.log(hello.call(hotel, 'Petya'));
// console.log(hello.call(hotel2));
// console.log(hello.call(hotel3));
// const hello = function (guest, stars) {
//     return `${guest}, welcome to ${stars}-star ${this.name}!`;
//   };

  // console.log(hello.call(hotel, 'Poly',5));
  // console.log(hello.call(hotel2, 'Mick',4));
  // console.log(hello.call(hotel3, 'Tim',3));
//   apply
// call(obj, arg1, arg2, ..... , argn) === apply(obj,[arg1, arg2, ..... , argn])
// console.log(hello.apply(hotel, ['Poly',5]));
//   console.log(hello.call(hotel2, ['Mick',4]));
//   console.log(hello.call(hotel3, ['Tim',3]));

// bind
// const hotel = {
//     name: "Resort Hotel",
//     showThis() {
//       console.log(this);
//     }
//   };
// hotel.showThis();
// const fn = function (callback) {
//     callback();
//   };
const test = document.querySelector('#test');
// console.log(test);
// function showThis() {
//     console.log(this);
// }
// // showThis();
// const bindThis = showThis.bind(window);
// test.addEventListener('click',bindThis);
//   const hotelShow = hotel.showThis.bind(hotel);
//   fn(hotelShow);

// constructor - для створення багатьох однотипних обєктів з різними параметрами
//
// function Human() {
//
// }
// //
// let man = new Human();
// man.name = 'Max';
// //
// console.log(man);


// function Person(name, age) {
//     // this = {}
//     this.name = name;
//     this.age = age;
//     // return this
// }

// const jane = new Person('Jane',25);
// console.log(jane);
// const mick = new Person('Mick',21);
// console.log(mick);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showAge = function() {
//         console.log(`My age is ${this.age}`);
//     };
//     this.showName = function() {
//         console.log(`My name is ${this.name}`);
//     };
// }
// //
//  const jane = new Person('Jane',25);
// console.log(jane.name);
// console.log(jane.age);
// console.log(jane);
// jane.showName();
// jane.showAge();
// const mick = new Person('Mick',21);
// console.log(mick);
// mick.showName();
// mick.showAge();
// local var
// function Person(name, age) {
//     const forName = 'My name is';
//     const forAge = 'My age is';
//     this.name = name;
//     this.age = age;
//     this.showName = function() {
//         console.log(`${forName} ${this.name}`);
//     };
//     this.showAge = function() {
//         console.log(`${forAge} ${this.age}`);
//     }
// }
// //
//  const jane = new Person('Jane',25);
// console.log(jane);
// console.log(jane.name);
// console.log(jane.forName);

// jane.showName();
// jane.showAge();

// studentds obj and constrctor

// const mick = {
//     name: 'Mick',
//     modules: 3,
//     learn(theme) {
//         this.modules +=1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };
// //
// const jane = {
//     name: 'Jane',
//     modules: 5,
//     learn(theme) {
//         this.modules +=1;
//         return `Student ${this.name} passed ${theme}`;
//     }
// };
//
// console.log(mick.modules);
// console.log(jane.modules);
// console.log(mick.learn('loops'));
// console.log(jane.learn('arrays'));
// console.log(mick.modules);
// console.log(jane.modules);

// function Student(name = 'student', modules = 0) {
//     this.name = name;
//     this.modules = modules;
//     this.learn = function(theme) {
//         this.modules +=1;
//         return `Student ${this.name} passed ${theme}`
//     }
// }

// const mick = new Student('Mick', 5);
// const jane = new Student("Jane", 3);
// console.log(mick.modules);
// console.log(jane.modules);
// console.log(mick.learn('loops'));
// console.log(jane.learn('arrays'));
// console.log(mick.modules);
// console.log(jane.modules);


// console.log(this === window);
// 'use strict'
// console.log(this === window);

// function thisTest() {
//     console.log(this === window);
// }
//
// thisTest();
// 'use strict'
// function thisTest() {
//     console.log(this === window);
// }
// function thisTest() {
//     console.log(this === undefined);
// }
// thisTest();

// function sayHi() {
//     console.log(`Hi my name is ${this.firstName} and my last name is ${this.lastName}`)
// }
//
// const person = {
//     firstName: 'Jane',
//     lastName: 'Doe',
// };

// sayHi.call(person);
// sayHi.apply(person);
// call - coma
// apply - Array

// const person = {
//     name: 'John',
//     sayHi() {
//         console.log(`Hi my name is ${this.name}`);
//     }
// }

// person.sayHi();
// setTimeout(person.sayHi,1000);
// setTimeout(person.sayHi.bind(person),1000);
// const hello = person.sayHi;
// const hello = person.sayHi.bind(person);
// setTimeout(hello,1000);

// const outerThis = this;
// const func = () => {
//     console.log(this === outerThis);
// }
// func()

// const counter = {
//     count: 0,
//     increment(){
//         function add () {
//             console.log('add',this);
//             console.log(this.count);
//             ++this.count;
//             console.log(this.count);
//
//         }
//         add();
//         console.log('increnemt',this);
//     }
// };
// counter.increment();
// counter.increment();


// const counter = {
//     count: 0,
//     increment(){
//          const add =  () => {
//              console.log(this);
//             console.log(this.count);
//             ++this.count;
//             console.log(this.count);
// //
//         };
//         add()
//     }
// };
// counter.increment();
// counter.increment();

// function Person(firstName, lastName) {
// console.log(this)
//     this.firstName = firstName;
// console.log(this)
//     this.lastName = lastName;
// console.log(this)
// }

// const persona = new Person('Jane', 'Doe')
// console.log(persona);
