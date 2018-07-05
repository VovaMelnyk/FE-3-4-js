// Протокол - набір правил за якими відбувається передача даних
// Під час передачі інфа розбивається на маленькі частини що називається пакети передається і потім назад збирається в цілісний вигляд
// TCP - набір правил передачі даних з попереднім обміном спеціальних пакетів для встановлення звязку(Відбувається свого роду привітання: -Привіт
//                         - Привіт
//                         -Побалакаємо?
//                         -Давай )
// Далі по цьому каналу відбувається передача пакетів (йде бесіда) при чому з перевіркою чи дойшов пакет чи ні. Якщо пакет не дойшов то посилається повторно (Повтори не дочув )
// IP - Адреса відправника і отримувача, за направлення по цих адресах відповідають маршрутизатори

// Як відбувається обробка нашого запиту коли ми вводимо в браузері якусь адресу сайту?

// 1) Відбувається відправка запросу на DNS сервер щоб дізнатися ІР адресу сайту на який ми хочемо потрапити
// 2) DNS сервер повертає нам необхідну ІР адресу
// 3) Наш компютер встановлює звязок з компютером по отриманій ІР адресі і посилає запит на отримання сторінки
// 4) Отримавши наш запит веб сервер опрацьовує його і посилає нам назад сторінку HTML зі вісіма необхідними файлами
// 5) Отримавши ці файли наш компютер відображає сторінку нам на екрані

// структура повідомлення
// Стартовая строка (start line|request-line|status-line) - определяет тип сообщения.
// Поля заголовков (message headers) - это строки в HTTP-сообщении, содержащие разделённую двоеточием пару параметр-значение, которые предоставляют необходимую информацию о запросе или ответе или об объекте, отправленном в теле сообщения.
// Тело сообщения (message body) - непосредственно данные сообщения.

// HTTPS = HTTP + SSL


// AJAX i XMLHttpRequest
// sync
// https://jsonplaceholder.typicode.com/

// // create req
// const req = new XMLHttpRequest();
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
// req.setRequestHeader('Content-Type', 'application/json');
// // req.send([body])
// req.send();
//
// // req.abort()
//
// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status
//
// if (req.status !== 200) {
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));
// }
// console.log(`test`);
// async
// readystatechange - відстежує стан запиту
// 0 - початок
// 1 - викликаний open
// 2 - отримані заголовки
// 3 - отримуємо данні
// 4 - запит закінчено

// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {
//         console.log(req.readyState);
//         return
//     }
//
//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };
//
//
// console.log(`test`);

// fetch(url, {option});
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data => {
//         if (data.ok) {
//             console.log('first', data);
//             return data.json()
//         }
//         throw new Error(`Error while fetching: ${response.statusText}`);
//     })
//     .then(data => {
//         console.log(data);
//         return data.map(item => item.name);
//     })
//     .then(mapRes => {
//         console.log(mapRes);
//     })
//     .catch(error => {
//         console.error("Error: ", error);
//     });
// options
// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'post',
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         'X-Custom-Header': 'custom value'
//     }),
//     body: JSON.stringify(
//         {name: 'Vova', age: 65})
// })
//     .then(res => {
//         if (res.ok) return res.json();
//         throw new Error(`Error while fetching: ${response.statusText}`);
//     })
//     .then(data => {
//         console.log(data);
//         return data.map(item => item.name);
//     })
//     .then(mapRes => {
//         console.log(mapRes);
//     })
//     .catch(error => {
//         console.error("Error: ", error);
//     });

// REST API


// CRUD
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE


// endpoint  - Точка входу
// resourse - ресурс до якого ми звертаємося
// ? - параметри запроса
// & - перерахування кількох параметрів запроса

// https://api.privatbank.ua/#p24/exchange
let container = document.querySelector('#container');

function galleryRequest() {
    let value = document.querySelector('.cars').value;
    fetch(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&image_type=photo&per_page=9`)
        .then(response => response.json())
        .then(data => {
            createGallery(data.hits);
            return data.hits;
        })
        .then(data => localStorage.setItem('gallery', JSON.stringify(data)))
        .then(() => {
            console.log('Ok');
            localStorage.removeItem('gallery');
            console.log('removed');
        })
        .catch(error => {
            console.log('Erroooorr');
            let storage = JSON.parse(localStorage.getItem('gallery'));
            createGallery(storage);
        })
}

function createGallery(arr) {
    container.innerHTML = arr.reduce((acc, el) => acc + `<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}/></div>`, '');
}

window.addEventListener('DOMContentLoaded', galleryRequest);
document.querySelector('.btn').addEventListener('click', galleryRequest);
window.addEventListener('keypress', (e) => e.keyCode === 13 ? galleryRequest() : null);

console.log('storage', JSON.parse(localStorage.getItem('gallery')));


function initMap() {
    const mapElement = document.querySelector('.js-google-map');
    const mapCenter = {lat: 50.4501, lng: 30.5234};
    const mapOptions = {
        center: mapCenter,
        zoom: 20
    };

    const map = new google.maps.Map(mapElement, mapOptions);
    //
    const marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: 'Hello World!',
        draggable: true,
        animation: google.maps.Animation.DROP,
        // position: {lat: 59.327, lng: 18.067}

    });
    marker.addListener('click', toggleBounce);

}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


//
// function paintGallery() {
//     let value = document.querySelector('.cars').value;
//     fetch(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&image_type=photo&per_page=9`)
//         .then(function (cars) {
//             return cars.json();
//         })
//         .then(function (cars) {
//             console.log('second then', cars.hits);
//             create(cars.hits);
//         });
// }
//
// function create(array) {
//     let div = document.querySelector(`#container`);
//     let gallery = array.reduce((acc, elf) => {
//         return acc + `<div class="one">
//         <p>${elf.tags}</p>
//         <img src=${elf.webformatURL}/>
//      </div>`
//     }, '');
//     div.innerHTML = gallery;
// }
// //
// let search = document.querySelector('.btn');
// search.addEventListener('click', paintGallery);
// //
// window.addEventListener('DOMContentLoaded', paintGallery);
// window.addEventListener('keypress', function (event) {
//     if (event.keyCode === 13) {
//         paintGallery();
//     } else {
//         return
//     }
// });

// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//     .then(response => response.json())
//     .then(data => createTable(data));
//
// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
//     .then(response => response.json())
//     .then(data => data
//         .filter(el => el.cc === 'USD' || el.cc === 'EUR' || el.cc === 'RUB')
//         .map(el => {
//             return {cc: el.cc, rate: el.rate}
//         }))
//     .then(result => console.log(result))

// function privat() {
//     let result = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
//     return result
//         .then(response => response.json())
//         .then(data => data.filter(el => el.ccy !== 'BTC'))
// }
//
// function nbu() {
//     let result = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
//     return result
//         .then(response => response.json())
//         .then(data => data.filter(el => el.cc === 'USD' || el.cc === 'EUR' || el.cc === 'RUB')
//             .map(el => {
//                 return {cc: el.cc, rate: el.rate}
//             }))
// }
//
// let promAllResult = Promise.all([privat(), nbu()]);
//
// promAllResult.then(result => {
//     let [privat, nbu] = result;
//     console.log(privat);
//     console.log(nbu);
//     console.log(createTable(privat, nbu))
//
// });

// Promise.all([fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')])
//     .then(response => response)
//     .then(data => console.log(data))


// function createTable(arr, arr2) {
//     let sumArr = arr.map((el, index) => el.ccy === arr2[index].cc || el.ccy === 'RUR' ? {
//         ...el,
//         rate: arr2[index].rate
//     } : null)
//     let curency = sumArr.reduce((acc, el) => acc += `<tr>
// <td>${el.ccy}</td>
// <td>${el.buy}</td>
// <td>${el.sale}</td>
// <td>${el.rate}</td>
// </tr>`, '');
//     // curency list
//     let table = `<table>
// <tr>
// <th>Валюта</th>
// <th>Покупка</th>
// <th>Продажа</th>
// <th>НБУ</th>
// </tr>
// ${curency}
// </table>`;
//     document.querySelector('#container').innerHTML = table;
// }

// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
// .then(data => data.json())
// .then(result => console.log('Безнал',result));

// function createHtml(info) {
//     let reduceResult = info.reduce(function (acc, element, i) {
//         return acc + `<tr>
//       <th scope="row">${i + 1}</th>
//       <td>${element.ccy}</td>
//       <td>${element.buy}</td>
//       <td>${element.sale}</td>
//     </tr>`
//     }, ``);
//     let table = `<table class="table table-hover table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Валюта</th>
//       <th scope="col">Покупка</th>
//       <th scope="col">Продажа</th>
//     </tr>
//   </thead>
//   <tbody>
//     ${reduceResult}
// </table>`;
//     document.querySelector('#container').innerHTML = table
// }

// fetch('https://randomuser.me/api/?results=5')
// .then(response => response.json())
// .then(data => console.log(data));

// JSON

// CSV - файл в проекті
// XML - https://www.w3schools.com/xml/simple.xml
// JSON - https://www.w3schools.com/js/js_json_xml.asp


// Stringify

// const dog = {
//     name: "Mango",
//     age: 3,
//     isHappy: true
// };
// //
// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON);
//
// Parse

// const json = `{"employees":[
//     { "firstName":"John", "lastName":"Doe" },
//     { "firstName":"Anna", "lastName":"Smith" },
//     { "firstName":"Peter", "lastName":"Jones" }
// ]}`;
// //
// console.log(json);
// const emp = JSON.parse(json);
// console.log(emp);
