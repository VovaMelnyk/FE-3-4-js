// Клас - ескіз(шаблон) обєкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і тд
// Методи - завестися, відкрити двері, збільшити швидкість
// Обєкт - екземпляр класа який створили з шаблона
// Інтерфейс - набір методів доступних для вмкористання іншими класами (приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик обєкту і відкидання незначних не вдаючисть в роздуми як методи працюють зсередини. (map, filter, sort)
// Інкапсуляція - приховання всіх внутрішніх процесів від користувача
// Наслідування - створення нового класу на базі існуюучого
// Поліморфізм - використання обєктів з однаковим інтерфейсом без інфи про внутрішню структуру.

// let arr = [];
// console.log(arr.concat());

// __proto__ - обєднує обєкти в лацюжки
// const animal = {
//     eat: true,
//     walk: true,
// };
// for (let key in animal) {
//     if (animal.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// const cat = {
//   jump: true
// };

// console.log(animal.eat);
// console.log(cat);
// cat.__proto__ = animal; // так не рекомендується робити
// console.log(cat.hasOwnProperty());
// console.log(cat.jump);
// console.log(cat.walk);
// console.log(cat.eat);
// console.log(cat);
// let arr = [1,2,3];
// console.log(arr);
// {}
// new Object()
// [[Prototype]] це запис __proto__ в специфікації ECMAScript

// Object.create
// const animal = {
//     eat: true,
//     walk: true,
// };
// const cat = Object.create(animal);
// console.log(cat);
// cat.jump = true;
// console.log(cat);
// const persCat = Object.create(cat);
// persCat.name = 'Homa';
// console.log('pers',persCat);
// console.log(persCat.walk);
// console.log(cat.jump);
// console.log(cat.walk);
// console.log(cat.eat);

// without prototype
// const people = Object.create(null);
// console.log(people);

// prototype

// let obj = {
//     prototype: {
//
//     }
// }

// let person = {
//     name: 'Max',
//     age: 35,
// };
// console.log(person);
//
// // new Object()
// // Object.prototype= {
// //
// // };
// Object.prototype.greet = function () {
//     console.log(`Hello i am from main obj ${this.name}`);
// };
// let person2 = {
//     name: 'Ann',
//     age: 35,
// };
// person2.greet();
// console.log(person);
//
// let max = Object.create(person);
// console.log(max.name);
// max.greet();
// console.log(max);
//
// let anna = Object.create(person);
// anna.name = "Anna";
// console.log(Object.getPrototypeOf(anna));
// console.log(Object.getPrototypeOf(person));
// Object.prototype.showName = function () {
//     console.log(`I am ${this.name}`);
// };
// max.showName();
// anna.showName();

// function Human(name) {
//     this.name = name;
// }
// //
// console.log(Human.prototype);
// Human.prototype.hello = function () {
//     console.log(`Hello my friends is ${this.friends}`);
// };
// Human.prototype.friends = ['Jony', 'Jamshud', 'Ravsah'];
// // //
// let man = new Human('Max');
// let anna = new Human('Anna');
// let mick = new Human('Mick');
// // mick.friends.pop();
// console.log(anna);
// console.log(man.friends);
// // console.log(anna.hello());
// console.log(anna.friends);
// anna.friends.pop();
// console.log(man.friends);
// // console.log(Human.prototype);
// console.log({})
// man.hello();
// man.name = 'Max';

//console.log(man);

// console.log(man.__proto__ === Human);
// console.log(man.__proto__ === Human.prototype);
// Human.prototype.sayHi = function () {
//     console.log(`Hello`);
// };
// man.sayHi();
// console.log(man.name);
// Human.prototype.name = 'Anna';
// console.log(man.name);

// passed arguments
// function Parents(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
//
// console.log(Parents.prototype);
//
// const child = new Parents('Jane', 'female');
// console.log(child);
// console.log(child.__proto__=== Parents.prototype);
// Parents.prototype.showChildInfo = function () {
//     console.log(`name: ${this.name}, gender: ${this.gender}`);
// };
// console.log(child);


// constructor - силка на ф-ю конструктор

// ф-я фабрика

// const createGuest = (guestName,roomNumber) => ({
//     guestName,
//     roomNumber,
//     getGuestRoomNumber() {
//         return this.roomNumber;
//     },
//     setRoomNumber(num) {
//         this.roomNumber = num;
//     }
// });
// console.log(createGuest('Mango',20));

// Apples
// Class and // extends
// protorype
// function Human(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Human.prototype.eat = function () {
//     console.log(`I can eat`);
// };
//
// Human.prototype.walk = function () {
//     console.log(`I can walk`);
// };
//
// Human.prototype.sleep = function () {
//     console.log(`I can sleep`);
// };

// class Human {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//
//     walk(){
//         console.log(`I can walk`);
//     }
//
//     sllep() {
//         console.log(`I can sleep`);
//     }
//
//     eat() {
//         console.log(`I can eat`);
//     }
// }
//
// let man = new Human('Max',12);
// console.log(man);
// man.walk();


// Animal.eat();
// Animal.sleep();
// let dog = new Animal();
// dog.sleep();
// Animal.indentificator();
// dog.indentificator();
// Animal.indentificator()
// const bobby = new Animal('Bobby', 5);
// console.log(bobby);
// bobby.eat();
// bobby.sleep();
// bobby.wakeUp();
// bobby.logAge();
// //
// class Animal {
// constructor - аналог ф-ї конструктора що має бути присутнім в класі обовязково (створює власні властивоств екзмпляра)
// constructor(name, age) {
//     console.log(`${name} is animal and was created`);
//     this.name = name;
//     this.age = age;
// }
//
// static indentificator () {
//     console.log(`Hello i am animal`);
// }
//
// eat() {
//     console.log(`${this.name} is eating`);
// }
//
// sleep() {
//     console.log(`${this.name} is sleeping`);
// }
//
// wakeUp() {
//     console.log(`${this.name} is waking up`);
// }
//
// logAge () {
//     return `${this.name} is ${this.age} years old`;
//
// }
// }


// class Dog extends Animal {
//     constructor(name, age,breed) {
//         super(name, age);
//         this.breed = breed;
//     }
//     logAgeFromDog() {
//     return `${super.logAge()} i am from dog`;
// }

// eat() {
//     console.log(`I am changed eat method`);
// }

// }

// let dog = new Dog('Chapy', 5, 'buldog');
// console.log(dog);
// dog.eat();
// Dog.indentificator();
// console.log(dog.logAgeFromDog());

// class Dog extends Animal{
//     constructor(name, age, breed) {
//         super(name, age)
//         this.breed = breed;
//     }
//
//     logBreed() {
//         console.log(`${this.name} is a ${this.breed}`);
//     }
//
//     logAgeFromDog() {
//         super.logAge();
//     }
// }

//
// const lassie  = new Dog('Lassie', 3, 'Collie');
// lassie.logBreed();
// lassie.logAgeFromDog();


// class Client {
//     constructor(name, days, room) {
//         this.name = name;
//         this.days = days;
//         this.room = room;
//     }
//
//     getInfo() {
//         console.log(`Client ${this.name} Will stay for ${this.days} days in room number ${this.room}`);
//     }
// }
//
// const ajax = new Client('Ajax',10,100);
// //
// ajax.getInfo();
// console.log(ajax);
// console.log(ajax.name);


// class Client {
//     constructor(name, days, room) {
//         const START = 2;
//         this.name = name;
//         this.days = days + START;
//         this.room = room;
//     }
//
//     getInfo() {
//         console.log(`Client ${this.name} Will stay for ${this.days} days in room number ${this.room}`);
//     }
// }
//
// const ajax = new Client('Ajax',10,100);
// //
// ajax.getInfo();
// console.log(ajax);
// console.log(ajax.name);
// console.log(ajax.days);
// console.log(ajax.start);

// get i set


// static methods


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     move() {
//         console.log(`I, ${this.name}, am moving!`);
//     }
// }
//
// class Dog extends Animal {
//     constructor(name, breed) {
//         // вызвать конструктор Animal с аргументом name
//         super(name);
//         this.breed = breed;
//     }
//
//     bark() {
//         console.log('woof!');
//     }
//
//     moveAndMakeSound() {
//         super.move();
//         this.bark();
//     }
// }
//
// const dog = new Dog('Mango', 'shepherd');

// dog.move();
// dog.bark();
// dog.moveAndMakeSound();
// console.log(dog.name);


/*
  Создать класс Account с полями login,
  email и friendsCount.

  Для класса Account, создать метод getAccountInfo(),
  который выводит в консоль значения всех полей.

  Создать несколько экземпляров с разными
  значениями свойств, вывести их в консоль.
*/


// class Account {
//     constructor(login, email, friendsCount) {
//         this.login = login;
//         this.email = email;
//         this.friendsCount = friendsCount;
//     }
//
//     getAccountInfo() {
//         return `My login is ${this.login} my mail is ${this.email} and i have ${this.friendsCount}`;
//     }
// }
//
// let arrAccounts = [];
// function getFormValue(event) {
//     event.preventDefault();
//     let login = document.querySelector(`[name='your-login']`).value;
//     let email = document.querySelector(`[name='E-mail']`).value;
//     let count = document.querySelector(`[name='countfriend']`).value;
//     // console.log(name);
//     // console.log(email);
//     // console.log(count);
//     let account = new Account(login, email, count);
//     let result = arrAccounts.some(element => element.login === account.login || element.email === account.email
//     );
//
//     console.log(result);
//     if(!result){
//         arrAccounts.push(account);
//     }
//     console.log(arrAccounts);
// }
//
// document.querySelector('.submit').addEventListener('click', getFormValue);

// логін
// імя
// країну
// місто
// дату народження
// Опис про себе
// силка на аватар

"use strict"

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25
  };

const BREAD = products.bread;
const MILK = products.milk;
const APPLES = products.apples;
const CHICKEN = products.chicken;
const PORK = products.pork;
const CHEESE = products.cheese;
const TEA = products.tea;
const CANDY = products.candy;

  function Cashier (name, ...products) {
      this.name = name;
      this.products = products;
      this.totalPrice = 0;
      this.customerMoney = 0;
      this.changeAmount = 0;

   this.countTotalPrice = function (order) {
    //метод, получает список покупок, считает общую сумму исходя из поля products
    for(let fill of this.products) {
      this.totalPrice += fill;
    }
    console.log(`Total sum of products: ${this.totalPrice}`)
    return this.totalPrice;
  };

  this.getCustomerMoney = function () {
    // метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 
    //     Ожидает ввода пользователя и записывает результат ввода в поле customerMoney. Проверить что результат ввода 
    //     пользователя не меньше чем значения поля totalPrice. Просит покупателя ввести сумму до тех пор, пока не будет 
    //     введена корректная сумма - равная или больше чем totalPrice. Если пользователь нажмет Cancel, 
    //     то функция возвращает null.
    this.customerMoney=prompt(`Total sum of products: ${this.totalPrice}. And now u money!`);
    if(this.customerMoney < this.totalPrice){
      this.getCustomerMoney ();
    } else if(this.customerMoney === null){
      return null;
    } else {
      return this.customerMoney;
    }
  };
  this.countChange = function () {
    // метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  };

  this.reset = function () {
    // метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.totalPrice = 0;
  };

  this.serve = function (order) {
    // метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
    // вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
    // countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
    // строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
    // Вызывает метод reset при любом исходе обслуживания
    this.countTotalPrice ();
    this.getCustomerMoney ();
    this.changeAmount ();
    if(this.getCustomerMoney()===null){
      alert('Очень жаль, что-то пошло не так, приходите еще');
    } else{
      alert(`Спасибо за покупку, ваша сдача ${this.countChange()}`);
    }
    this.reset ();
  };
  }

let cashier1 = new Cashier('Mango',BREAD,PORK,CANDY);
console.log(cashier1); 
// cashier1.serve(this.products);
cashier1.countTotalPrice(this.products);
// cashier1.getCustomerMoney(); 