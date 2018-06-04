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
// protorype === __proto__
// function Human(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// Human.prototype.eat = function () {
//     console.log(`I can eat`);
// };
// //
// Human.prototype.walk = function () {
//     console.log(`I can walk`);
// };
// //
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
// inh
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     move() {
//         console.log(`I, ${this.name}, am moving!`);
//     }
// }

// let dog = new Animal('bobik');
// dog.move();
//
// class Dog extends Animal {
//     constructor(name, age, breed) {
//         // вызвать конструктор Animal с аргументом name
//         super(name, age);
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
// //
// const dog = new Dog('Mango',25, 'buldog');
// console.log(dog.moveAndMakeSound());
// dog.move();
// dog.bark();
// dog.moveAndMakeSound();
// console.log(dog.name);

// //

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
// //
// const ajax = new Client('Ajax',10,100);
// // //
// // ajax.getInfo();
// // console.log(ajax);
// // console.log(ajax.name);
// console.log(ajax.days);
// console.log(ajax.START);
// // console.log(ajax.start);


// static methods
// class Animal {
// // constructor - аналог ф-ї конструктора що має бути присутнім в класі обовязково (створює власні властивоств екзмпляра)
//     constructor(name, age) {
//         console.log(`${name} is animal and was created`);
//         this.name = name;
//         this.age = age;
//     }
//
//     static indentificator() {
//         console.log(`Hello i am static method`);
//     }
//
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
//
//     sleep() {
//         console.log(`${this.name} is sleeping`);
//     }
//
//     wakeUp() {
//         console.log(`${this.name} is waking up`);
//     }
//
//     logAge() {
//         return `${this.name} is ${this.age} years old`;
//
//     }
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
// Animal.eat();
// Animal.sleep();
// let dog = new Animal();
// dog.sleep();
// Animal.indentificator();
// dog.indentificator();
// Animal.indentificator();
// const bobby = new Animal('Bobby', 5);
// bobby.indentificator();
// console.log(bobby);
// // bobby.eat();
// // bobby.sleep();
// // bobby.wakeUp();
// console.log(bobby.logAge());
// let dog = new Dog('Chapy', 5, 'buldog');
// console.log(dog);
// dog.eat();
// Dog.indentificator();
// console.log(dog.logAgeFromDog());

// class Tank {
//     constructor(x, y, ammunition) {
//         this.x = x;
//         this.y = y;
//         this.ammunition = ammunition;
//     }
//
//     moveTo(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     fireTo(x, y) {
//         if (this._canFire()) {
//             console.log('Fire');
//             this.ammunition--;
//         } else {
//             alert('Поповніть рахунок, відправте СМС на номер 339985');
//         }
//
//     }
//
//     _canFire() {
//         if(this.ammunition > 0) {
//            return true
//         } else {
//             return false
//         }
//     }
// }
//
// let tank1 = new Tank(10,20,3);
// console.log(tank1.ammunition);
// tank1.fireTo(30,30);
// console.log(tank1.ammunition);
// tank1.fireTo(40,40);
// console.log(tank1.ammunition);
// tank1.fireTo(10,10);
// console.log(tank1.ammunition);
// tank1.moveTo(50,50);
// // console.log(tank1.x, tank1.y);
// tank1.fireTo(60,60);
// // console.log(tank1.ammunition);
// // console.log(tank1.canFire());


// 1) Створити клас Танк
// 2) Клас буде мати методи які будуть приймати координати по осі х та у:
// 2.1) moveTo, fireTo
// 3) додати класу властивість ammunition
// 4) При пострілу зменьшувати кількість снарядів
// 5) Створити метод що дасть можливість відразу іхати і стріляти moveAndFire прийматиме moveX, moveY, fireX, fireY
// 6) Створити метод перевірки кількості снарядів canFire()
// 7) Приватний метод _canFire

// get i set


class User {
    constructor(name, surname) {
        // this.name = name;
        // this.surname = surname;
        // private
        this._name = name;
        this._surname = surname;
    }

    getFullName() {
        return `${this._name} ${this._surname}.`
    }

    // // getter
    //
    get getterName() {
        return this._name;
    }
    //
    // get surname() {
    //     return this._surname;
    // }
    // // setter
    //
    set age(age) {
        this._age = age;
    }

    set setName (name) {
        this._name = name;
    }

    //
    get age() {
        return this._age;
    }
}

let user = new User('Jon', 'Dou');
// console.log(user.getFullName());
//
// console.log(user.getFullName());
// console.log(user.name);
// // get and set
// console.log(user.name);
// user.name = 'Mick';
// console.log(user.name);
// // console.log(user.surname);
// // user.name = 'mick';
console.log(user.getterName);
user.setName = 'newName';
console.log(user.getterName);

// user.age = 25;
// console.log(user.age);


// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щою всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран


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
