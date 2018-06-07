// DOM - дерево обєктів доступне через зміну в JS, елементи які малює браузер по розмітці
// кожен тег це окремий елемент DOM

// Показати структкру через додаток в хромі


// навігація по DOM

// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);
// console.log(body.children);
// console.log(body.firstChild);
// console.log(body.firstElementChild);
// console.log(body.lastChild);
// console.log(body.lastElementChild);
// const div = body.children[0];
// console.log(div);
// console.log(div.children);
// console.log(div.lastElementChild);
// console.log(div.lastChild);
// const p = div.children[1];
// console.log(p);
// console.log(p.previousElementSibling);
// console.log(p.previousSibling);
// console.log(p.nextElementSibling);
// console.log(p.nextSibling);
// console.log(p.parentNode);

// querySelector and before
// const title = document.querySelector(`.text::after`);
// console.log(title);
// console.log(document.querySelector('.text'));
// console.log(document.querySelector('.item'));
// const textList = document.querySelectorAll('.text');
// console.log(Array.from(textList));
//
// console.log(document.getElementsByClassName('text'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementById('title'));

//  matches

// const p = document.querySelector('p');
// console.log(p);
// console.log(p.matches('.text'));
// console.log(p.matches('.title'));

// innerHTML i textContent

// const div = document.querySelector('div');
// console.log(div.innerHTML);
// console.log(div.textContent);
// div.innerHTML += `<h1>Inner HTML</h1>`;
// div.textContent += `<h1>Inner HTML</h1>`;

// classList

// const text = document.querySelector('.text');
// console.log(text);
// console.log(text.classList);
// console.log(title.classList.contains('big'));
// text.classList.add('big');
// console.log(text.classList);
// console.log(text.classList.contains('big'));
// title.classList.add('small');
// console.log(title.classList);
// text.classList.remove('big');
// console.log(title.classList.contains('big'));
// text.classList.toggle('big');
// console.log(title.classList.contains('big'));

// attr

// const a = document.querySelector('a');
// console.log(a);
// console.log(a.hasAttribute('href'));
// console.log(a.getAttribute('href'));
// a.setAttribute('title', 'super link');
// a.setAttribute('id', 'link-one');
// console.log(a);
// console.log(a.attributes);
// a.removeAttribute('title');
// console.log(a.attributes);
// console.log(a.href);
// console.log(a.title);
// console.log(a.title = 'test');

// data dataset

// const dataCustom = document.querySelector('[data-animal]');
// console.log(dataCustom);
// console.log(dataCustom.dataset.animal);
// dataset.animal === data-animal

// create

// const h1 = document.createElement('h1');
// h1.textContent = 'I am created from JS';
// console.log(h1);
// document.querySelector('div').innerHTML = h1;

// add on page

// select parent

// const div = document.querySelector('div');
// div.appendChild(h1);
// div.insertBefore(h1,document.querySelector('.text'));

// div.append(h1);
// div.prepend(h1);
// document.querySelector('ul').after(h1);
// const list = document.querySelector('.list');
// list.before(h1);
// document.querySelector('ul').replaceWith(h1);

// remove
// h1.remove();

// inner.HTML

// const div = document.querySelector('div');
// console.log(div);
// div.innerHTML = '<p>Hello World!</p>';
// div.innerHTML += '<p>Hello World!</p>';

// insertAdjacentHTML


// const ul = document.querySelector('ul');
// const text = '<li>Hello World!</li>';
// ul.insertAdjacentHTML('beforebegin', text); // перед
// ul.insertAdjacentHTML('afterend', text); // після
// ul.insertAdjacentHTML('afterbegin', text); // всередині спочатку
// ul.insertAdjacentHTML('beforeend', text); // всередині вкінці

// insertAdjacentElement
// insertAdjacentText

// clone

// const article = document.querySelector('.article');
// const clone = article.cloneNode(false);
// console.log(clone);

// DocumentFragment

// const frag = document.createDocumentFragment();

// BOM

// console.log(history);
// console.log(location);
// console.log(navigator);
// const onSuccess = position => {
//     console.log(position);
//     const { latitude, longitude } = position.coords;
//
//     console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
// };

// const onError = error =>
// console.error('Ошибка при определении положения: ', error);

// navigator.geolocation.getCurrentPosition(onSuccess, onError);

// function initMap() {
//     const mapElement = document.querySelector('.js-google-map');
//     const mapCenter = { lat: 50.4501, lng: 30.5234 };
//     const mapOptions = {
//         center: mapCenter,
//         zoom: 20
//     }
//
//     const map = new google.maps.Map(mapElement, mapOptions);
//
//     const marker = new google.maps.Marker({
//         position: mapCenter,
//         map: map,
//     });
// }

// https://www.youtube.com/playlist?list=PLgGbWId6zgaXFR4SW_3qJ55cxmEqRNIzx