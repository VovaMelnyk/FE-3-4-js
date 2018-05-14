// // create
// const hotel = {};

// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     'status': 'Lux',
//   };

// get

// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     'status': 'Lux',
//   };
// console.log([1, 2, 3]);
// console.log( hotel.name ); // Resort Hotel
// console.log( hotel["name"] ); // Resort Hotel
// hotel.name = "Coastline Resort";
// console.log(hotel);
// hotel.addres = 'Kyiv';
// console.log( hotel.name ); // Coastline Resort
// console.log( hotel["name"] ); // Coastline Resort

// hotel["name"] = "Stardust Hotel";
// console.log( hotel.name ); // Stardust Hotel
// console.log( hotel["name"] ); // Stardust Hotel

// add new 
// hotel.address = "1, Beach ave.";
// hotel["manager"] = "Chuck Norris";
// console.log(hotel);

// let name = "Resort Hotel";
// let stars = 5;

// const hotel = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };
// console.log(hotel);
// const hotel = {
//   name,
//   stars,
//   capacity: 100,
// };
// // console.log(hotel);
//
// let manager = 'Chack';
// hotel.manager = manager;
// console.log(hotel);
// console.log(hotel.manager);

// delete 

// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// //
//   delete hotel.name;
//   hotel.stars = 4;
//   console.log( hotel );
// own property
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//   };

// let hasName = 'name' in hotel;
// let hasStars = hotel.hasOwnProperty('stars');
// let hasPool = 'pool' in hotel;
//
// console.log(hasName); // true
// console.log(hasStars); // true
// console.log(hasPool); // false
// hotel.pool = true;
// console.log('pool' in hotel);


// methods

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     getName: function () {
//       return hotel.name;
//     },
//     getStars: () => hotel.stars,
//
//     changeCapacity(value) {
//       hotel.capacity = value;
//     },
//     createKey(value) {
//         hotel.address = value
//     }
//   };
//
//   console.log ( hotel.getName() ); // Resort Hotel
//   console.log ( hotel.getStars() ); // 5

// hotel.changeCapacity(200);
// hotel.capacity = 500;
// console.log ( hotel.capacity ); // 200
// hotel.createKey('Kyiv');
// console.log(hotel);
// hotel.createKey('Lviv');
// hotel.street = 'sflksdflsd';


// let a = 5;
// console.log(a);
// let b = a;
// console.log(b);
// a = 10;
// console.log(a, b);
//
// let obj1 = {
//     name: "chack",
// };
// console.log(obj1);
// let obj2 = obj1;
// console.log(obj2);
// obj1.name = 'Norris';
// console.log('1',obj1);
// console.log('2',obj2);
// console.log(obj1 === obj2);

// for in

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
//
//   // Перебор ключей key объекта hotel
//   for (const key in hotel) {
//     console.log('Key: ', key);
//   }

// for (const key in hotel) {
//     console.log(hotel[key]);
//   }

// for (const key in hotel) {
//     if (hotel.hasOwnProperty(key)) {
//       console.log('Value: ', hotel[key]);
//     }
//   }
// console.log(hotel);

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
//
//   const keys = Object.keys(hotel);
//   const values = Object.values(hotel);
//   const entries = Object.entries(hotel);
//   console.log(keys);
//   console.log(values);
//   console.log(entries);

// assign

// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};
//
// Object.assign(first, last);
// console.log(person);
//
// console.log(first);
// console.log(last);

// const a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
// console.log(a);
//
// const a = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
// console.log(a);

// const obj = {person: 'Thor Odinson'};
// const clone = Object.assign({}, obj);
// clone.wearpon = 'hammer';
// console.log(clone);
// console.log(obj);

// const defaultSettings = {
//     name: "Mango",
//     age: 2,
//     status: "happy",
//     isActive: false,
//     isAdmin: false,
//   };

  // const updatedSettings = {
  //   age: 3,
  //   status: "cheerful",
  //   isActive: true,
  // };

  // Object.assign(defaultSettings, updatedSettings);
//
//   console.log(defaultSettings);
// ...
// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};
//
// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// const c = {
//   ...a,
//   ...b,
//   q: 44,
// };
//
//
// let state = {
//   a: 5,
//   b: 6,
//   c: 7,
// };
//
// let d = {};
// let newState = {
//     ...state,
//     c:8,
// };

// console.log(newState);

// dest

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// let name = hotel.name;

//   // Объявим переменные и присвоим им значения из объекта
//   const { name, stars, status } = hotel;
//   console.log(name, stars, status);

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
//
//   const { name = "hotel", stars = 3, status = "empty" } = hotel;
//
//   console.log(name, stars, status);
/*
  Напишите код, который, для объекта user, последовательно:
 - добавляет поле mood со значением 'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user
    циклом в формате ключ: значение
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };

/*
  Создайте функцию isObjectEmpty(obj), которая получает
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
// ); // true
//
// console.log(
//     isObjectEmpty({a: 1})
// ); // false


// let isObjectEmpty = obj => Object.keys(obj).length === 0;

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

/*
  Напишите функцию countOwnProps(obj),
  считающую кол-во сообственных свойств в объекте.
  Функция возвращает количество свойств.
*/

// // Вызовы функции для проверки
// console.log(
//     countOwnProps({})
// ); // 0
//
// console.log(
//     countOwnProps({a: 1, b: 3, c: 'hello'})
// ); // 3

/*
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию,
  имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки
// 330

// function countTotalSalary(salary) {
//     let sum = Object.values(salary);
//     if (sum.length !== 0) {
//         let result = sum.reduce(function (current, next) {
//             return current + next
//         });
//         return result;
//     }
//     else {
//         return 0;
//     }
// }

// let countTotalSalary = salary => Object.values(salary).length !== 0 ? Object.values(salary).reduce((current, next) => current + next) :
//     0;
// console.log(
//     countTotalSalary({})
// ); // 0
//
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80
//     })
// );

// const users = [
//     {name: 'Poly', age: 7, mood: 'happy'},
//     {name: 'Mango', age: 4, mood: 'blissful'},
//     {name: 'Ajax', age: 3, mood: 'tired'}
// ];

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         for (let i = 0; i < users.length; i++) {
//             result.push(users[i][prop]);
//         }
//         return result;
//     } return result;
// };

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         return users.map(function (obj) {
//             return obj[prop];
//         })
//     } return result;
// };

// function getAllPropValues(prop) {
//     let result = [];
//     if (prop in users[0]) {
//         return users.map(obj => obj[prop])
//     } return result;
// };

// function getAllPropValues(prop) {
//     return prop in users[0] ? users.map(obj => obj[prop]) : []
// };

// let getAllPropValues = prop => prop in users[0] ? users.map(obj => obj[prop]) : [];

// Вызовы функции для проверки
// console.log(
//     getAllPropValues('name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//     getAllPropValues('mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//     getAllPropValues('active')
// ); // []

/*
    1. Используя метод map, пройдите по массиву guests,
    и составьте новый массив, заменив значение
    поля isActive на противоположное.

    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.

    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)

    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*/

// const guests = [
//     {name: 'Mango', inactiveDays: 15, isActive: true},
//     {name: 'Poly', inactiveDays: 8, isActive: false},
//     {name: 'Ajax', inactiveDays: 32, isActive: false},
//     {name: 'Chelsey', inactiveDays: 85, isActive: true}
// ];
//
// let newArr = guests.map(function (item) {
//     return item.isActive === true ? item.isActive = false : item.isActive = true;
// })
//
// let setGuestState = (guests, period) => {
//     guests.map((element) =>
//         element.inactiveDays > period && element.inactiveDays !== false ?
//             element.isActive = false
//             :
//             element.isActive = true
//     )
//     return guests;
// }

// function setGuestState(p, 10)
// {
//
// }

// // Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true
// console.log(guests);
// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true
//
// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
//