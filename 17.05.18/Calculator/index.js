// // create constructor
// // function Calculator () {
// //
// //     this.getValue = () => {
// //         this.a = +prompt('a');
// //         this.b = +prompt('b');
// //         const aValue = document.querySelector('.a');
// //         aValue.textContent = `a = ${this.a},`;
// //         const bValue = document.querySelector('.b');
// //         bValue.textContent = `b = ${this.b},`;
// //     }
// //
// //     this.sum = () => {
// //         const sumResult = document.querySelector('.sum');
// //         sumResult.textContent = `Сума = ${this.a +this.b},`
// //         return this.a + this.b;
// //     };
// //
// //     this.minus = () => {
// //         const minusResult = document.querySelector('.min');
// //         minusResult.textContent = `Різниця = ${this.a - this.b},`
// //         return this.a - this.b;
// //     }
// //
// //     this.mult = () => {
// //         const multResult = document.querySelector('.mlt');
// //         multResult.textContent = `Добуток = ${this.a * this.b}.`
// //         return this.a * this.b;
// //     }
// //
// //     this.devide = () => {
// //         const devideResult = document.querySelector('.dev');
// //         devideResult.textContent = `Частка = ${this.a / this.b},`
// //         return this.a / this.b;
// //     }
// //
// //     this.pow = () => {
// //         const powResult = document.querySelector('.pw');
// //         powResult.textContent = `Степінь = ${Math.pow(this.a, this.b)},`
// //         return Math.pow(this.a, this.b);
// //     }
// // }
// //
// //
// // // create exemplar
// // let calculator = new Calculator();
// // // get element from DOM
// // const start = document.querySelector('.start');
// // const plus = document.querySelector('.plus');
// // const minus = document.querySelector('.minus');
// // const pow = document.querySelector('.pow');
// // const devide = document.querySelector('.devide');
// // const mult = document.querySelector('.mult');
// //
// // // add event listeners on buttons;
// // start.addEventListener('click', calculator.getValue);
// // plus.addEventListener('click', calculator.sum);
// // minus.addEventListener('click', calculator.minus);
// // pow.addEventListener('click', calculator.pow);
// // devide.addEventListener('click', calculator.devide);
// // mult.addEventListener('click', calculator.mult);
// //
// // // for test
// // // calculator.getValue();
// // // console.log(calculator.sum());
// // // console.log(calculator.minus());
// // // console.log(calculator.mult());
// // // console.log(calculator.pow());
// // // console.log(calculator.devide());
//
//
//
// // 1) Створити калькулятор за допомогою конструктора
// // 2) Конструктор має мати такі методи:
// // 2.1) getValue - запитати 2 числа в користувача і зберегти їх в властивості обєкта
// // 2.2) sum - метод що додає 2 числа;
// // 2.3) minus - метод що віднімає 2 числа;
// // 2.4) mult -метод що перемножує 2 отриманих числа
// // 2.5) devide - метод ділить число а на b
// // 2.6) pow - метод що підносить а до степеня b
// // 3 ) створити в розмітці 6 кнопок кожна з яких буде запускати свій метод калькулятора
// // 4 ) Вивести на екран резльтат роботи кожного метода калькулятора після натискання відповідної кнопки (Наприклад при натисканні на створену кнопку + вивести на екран фразу "Сума = і результат робити метода sum")
//
// function CalcConstructor () {
//
//      this.getValue = function () {
//
//         this.a = +prompt('enter a number');
//         this.b = +prompt('enter b number');
//         if(isNaN(this.a) || isNaN(this.b)){
//             return alert('number incorrect');
//         }
//         console.log(this.a, this.b);
//         console.log(this);
//         let a = document.querySelector('#a')
//          a.textContent = `your first number ${this.a}`
//          let b = document.querySelector('#b')
//          b.textContent = `your second number ${this.b}`
//
//     }
//     this.sum = function () {
//          let sum = document.querySelector('#sum');
//          sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
//         console.log(this.a, this.b);
//         console.log(this)
//     }
//     this.minus = function () {
//          let minus = document.querySelector('#minus');
//          minus.textContent = this.a - this.b;
//     }
//     this.mult = () =>{
//          let mult = document.querySelector('#mult');
//          mult.textContent = this.a * this.b;
//     }
//     this.divide = () => {
//          let divide = document.querySelector('#divide');
//         divide.textContent = this.a / this.b;
//     }
//     this.pow = () => {
//         let pow = document.querySelector('#pow');
//         pow.textContent = Math.pow(this.a,  this.b)
//     }
// }
// // function CalcConstructor (){}
// // //
// // CalcConstructor.prototype.getValue = function () {
// //         this.a = +prompt('enter a number');
// //         this.b = +prompt('enter b number');
// //         if(isNaN(this.a) || isNaN(this.b)){
// //             return alert('number incorrect');
// //         }
// //         console.log(this.a, this.b);
// //         console.log(this);
// //         let a = document.querySelector('#a')
// //         a.textContent = `your first number ${this.a}`
// //         let b = document.querySelector('#b')
// //         b.textContent = `your second number ${this.b}`
// //
// //     };
// //
// // CalcConstructor.prototype.sum = function () {
// //         let sum = document.querySelector('#sum');
// //         sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
// //         console.log(this.a, this.b);
// //         console.log(this)
// //     };
// //
// // CalcConstructor.prototype.minus = function () {
// //         let minus = document.querySelector('#minus');
// //         minus.textContent = this.a - this.b;
// //     };
// //
// // CalcConstructor.prototype.mult = function () {
// //         let mult = document.querySelector('#mult');
// //         mult.textContent = this.a * this.b;
// //     };
// //
// // CalcConstructor.prototype.divide = function () {
// //         let divide = document.querySelector('#divide');
// //         divide.textContent = this.a / this.b;
// //     };
// // CalcConstructor.prototype.pow = function () {
// //         let pow = document.querySelector('#pow');
// //         pow.textContent = Math.pow(this.a, this.b)
// //     };
// //
// //
// let calculator = new CalcConstructor();
// //
// let start = document.querySelector('.get-Value')
//
// start.addEventListener('click', calculator.getValue.bind(calculator));
//
// document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
// console.log(calculator);
//
// document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
//
// document.querySelector('.mult').addEventListener('click', calculator.mult);
//
// document.querySelector('.divide').addEventListener('click', calculator.divide);
//
// document.querySelector('.pow').addEventListener('click', calculator.pow);


















