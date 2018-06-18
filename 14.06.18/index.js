// click
// submit
// focus
// keydown
// keyup
// keypress
// input
// DOMContentLoaded

// add and remove listeners

// const one = document.querySelector('#one');
// const many = document.querySelector('#many');

// function first() {
//     alert(`I am action from first button`);
// }
//
// one.addEventListener('click', first);
//
// function second() {
//     alert(`I am action from second button`);
//
// }
//
// function hello() {
//     alert(`I am action from second button and hello function`);
//
// }
//
// many.addEventListener('click', first);
// many.addEventListener('click', second);
// many.addEventListener('click', hello);
//
// one.addEventListener('click', first);
// many.addEventListener('click', second);
// many.addEventListener('click', hello);
//
// function withRemoveListener() {
//     alert(`I am action from first button and i remove after end`);
//     one.removeEventListener('click',withRemoveListener);
//
// }
//
// one.addEventListener('click',withRemoveListener);

// this

// function showThis() {
//     console.log(this);
// }
//
// showThis();

// one.addEventListener('click', showThis);

//
// one.addEventListener('click', showThis.bind(window));

// event

// function showEvent(event) {
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     console.log(this);
// }
//
// //
// one.addEventListener('click', showEvent);

// function add(a) {
//     console.log(a + 5);
// }
// one.addEventListener('click', () => add(25));
// bubbling and event.stopPropagation(), event.stopImmediatePropagation().

// const boss = document.querySelector('.boss');
// const zam = document.querySelector('.zam');
// const manger = document.querySelector('.manager');
// const worker = document.querySelector('.worker');

//
// function fromWorker(event) {
//     alert(`Hello i am active when bubbling up to worker`);
//     console.log('worker target', event.target);
//     console.log('worker currentTarget', event.currentTarget);
//     // event.stopPropagation();
//
// }
//
// function fromManger() {
//     alert(`Hello i am active when bubbling up to manger`);
// // event.stopPropagation();
//
// }
//
// function fromZam() {
//     alert(`Hello i am active when bubbling up to zam`);
//     console.log('boss target', event.target);
//     console.log('boss currentTarget', event.currentTarget);
// }
//
// function fromBoss() {
//     alert(`Hello i am active when bubbling up to boss`);
//     console.log('boss target', event.target);
//     console.log('boss currentTarget', event.currentTarget);
// }
//
// //
//
// boss.addEventListener('click', fromBoss);
// zam.addEventListener('click', fromZam);
// manger.addEventListener('click', fromManger);
// worker.addEventListener('click', fromWorker);

// const send = document.querySelector('.send');
// send.addEventListener('click', function (e) {
//     e.preventDefault();
//     let msg = document.querySelector('.msg').value;
//     let title = document.querySelector('.title').value;
//     let info = {
//         title,
//         msg,
//     };
//     let str = `<div class="post">
// <h2>${info.title}</h2>
// <p>${info.msg}</p>
// </div>`;
//     document.querySelector('#root').innerHTML += str;
//     document.querySelector('.msg').value = '';
//     document.querySelector('.title').value = '';
// });


// event.preventDefault()

// event delegation

// function delegation(event) {
//     // alert(`Hello i am delegation function`);
//     console.log('target',event.target);
//     console.log('CURRENT TARGET',event.currentTarget);
// }
// //
// //
// boss.addEventListener('click', delegation);


// DOMContentLoaded
// document.addEventListener("DOMContentLoaded", callback);
// onload

// window.onload = function () {
//     alert(`All resourses loaded`)
// };

// onunload

// window.onunload = function () {
//     return `onunload alert`;
// };

// onbeforeunload

// window.onbeforeunload = function () {
//     return `Are you want exit ?`;
// };


// mousedown
// mouseup
// click
// mouseover вспливають
// mouseout вспливають
// mousemove
// contextmenu
// dblclick
// mouseenter  не вспливають
// mouseleave  не вспливають

// keyup
// keydown
// keypress

// change
// input
// focus
// scroll
// pageXOffset кількість прокрутки в рх
// pageYOffset кількість прокрутки в рх

// getBoundingClientRect()
// Ширина и высота элемента включая рамки (border)
// offsetWidth
// offsetHeight
// Размеры видимой внутренней части элемента
// clientWidth
// clientHeight


// let list = document.querySelector('ul');
//
// function kurkustrumbe(event) {
//     let a = event.target;
//     console.log(Array.from(list.children).indexOf(a));
// }
//
// list.addEventListener('click', kurkustrumbe);


// const section = document.querySelector('#root');
// const h1 = document.querySelector('#h1');
// const p = document.querySelector('#p');
// const ul = document.querySelector('#ul');
// const img = document.querySelector('#img');
//
// function createTitle() {
//     const title = document.createElement('h1');
//     title.textContent = 'Интерфейсы, основанные на Event';
//     section.append(title);
// }
//
// function createP() {
//     const text = document.createElement('p');
//     text.textContent = 'Ниже приведён список интерфейсов, основанных на главном интерфейсе Event, а также указаны ссылки на них в документации MDN API. Заметьте, что имена всех интерфейсов оканчиваются на "Event".';
//     section.append(text);
// }
//
// function createUL() {
//     const list = document.createElement('ul');
//     for (let i = 0; i < 3; i++) {
//         let item = document.createElement('li');
//         item.textContent = `Item ${i}`;
//         list.append(item);
//     }
//     section.append(list);
// }
//
// function createImg() {
//     const pic = document.createElement('img');
//     pic.setAttribute('src', 'http://www.sabreakingnews.co.za/wp-content/uploads/2017/06/Bee-bearding.jpg');
//     section.append(pic);
// }
//
// function createHtml(tag,text,container,atr,atrValue ) {
//     const el = document.createElement(tag);
//     el.textContent = text;
//     el.setAttribute(atr, atrValue);
//     container.append(el);
// }
//
// h1.addEventListener('click', () => createHtml('h1','Интерфейсы, основанные на Event', section,null, null));
// p.addEventListener('click', () => createHtml('p','Ниже приведён список интерфейсов, основанных на главном интерфейсе Event, а также указаны ссылки на них в документации MDN API. Заметьте, что имена всех интерфейсов оканчиваются на "Event".', section, null, null));
// ul.addEventListener('click', createUL);
// img.addEventListener('click', createImg);

// const list = document.querySelector('ul');
// const items = Array.from(document.querySelectorAll('li'));
//
// function select(e) {
//     // console.log(items.indexOf(e.target) + 1);
//     console.log(items);
// }

// list.addEventListener('click', select);


let form = document.querySelector('.form');
let totalPrice = document.querySelector('.total');
let amount = document.querySelector('.amount');

function total() {
    let price = document.querySelector('#price');
    let quantity = document.querySelector('#quantity');
    let result = price.value * quantity.value;
    totalPrice.textContent = `${result.toFixed(2)} грн`;
    amount.textContent = quantity.value;
}
form.addEventListener('input',total);
window.addEventListener('DOMContentLoaded', function () {
    total()
});