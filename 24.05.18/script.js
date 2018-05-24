// map
// let numbers = [0,2,4];
// let newNumbers = numbers.map(function (element,index,arr) {
//     return element * 2;
// });
// console.log(numbers);
// console.log(newNumbers);
//
// let arrowNumbers = numbers.map(element => element*20);
// console.log(arrowNumbers);
// const addOne = arr.map(n => n + 1);
// console.log(addOne); // [1, 3, 5]
// к значению массива добавим значение позиции этого числа
// const numbers = [0, 2, 4, 6, 8, 10];
// const flipFlop = numbers.map(function (element, index) {
//     return element + index
// });
// console.log(flipFlop);
// const flipFlop = numbers.map((element, index) => element + index);
// console.log(flipFlop);
//
// const addPosition = odd.map((n, i) => n + i);
// console.log(addPosition); // [0, 3, 6, 9, 12, 15]
// // filter


// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const even = numbers.filter(function (el) {
// // if (el > 5) {
// //     return el
// // }
// // return el === 5 ? el : null;
// // });
// const even = numbers.filter(function (element) {
//    if (element % 2 === 0) {
//        return element
//    }
// });
// console.log(even);


// console.log(even);

// let crypto = [
//     {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "rank": "1",
//         "price_usd": "10033.7",
//         "price_btc": "1.0",
//         "24h_volume_usd": "9678670000.0",
//         "market_cap_usd": "168939784887",
//         "available_supply": "16837237.0",
//         "total_supply": "16837237.0",
//         "max_supply": "21000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-4.99",
//         "percent_change_7d": "-10.61",
//         "last_updated": "1517412569",
//         "price_eur": "8063.1114211",
//         "24h_volume_eur": "7777808248.01",
//         "market_cap_eur": "135760517954"
//     },
//     {
//         "id": "ethereum",
//         "name": "Ethereum",
//         "symbol": "ETH",
//         "rank": "2",
//         "price_usd": "1104.04",
//         "price_btc": "0.110798",
//         "24h_volume_usd": "4494890000.0",
//         "market_cap_usd": "107451537175",
//         "available_supply": "97325765.0",
//         "total_supply": "97325765.0",
//         "max_supply": null,
//         "percent_change_1h": "-0.68",
//         "percent_change_24h": "-2.67",
//         "percent_change_7d": "7.35",
//         "last_updated": "1517412553",
//         "price_eur": "887.20985612",
//         "24h_volume_eur": "3612107088.67",
//         "market_cap_eur": "86348377629.0"
//     },
//     {
//         "id": "ripple",
//         "name": "Ripple",
//         "symbol": "XRP",
//         "rank": "3",
//         "price_usd": "1.12924",
//         "price_btc": "0.00011333",
//         "24h_volume_usd": "1554730000.0",
//         "market_cap_usd": "43745789628.0",
//         "available_supply": "38739142811.0",
//         "total_supply": "99993093880.0",
//         "max_supply": "100000000000",
//         "percent_change_1h": "-0.89",
//         "percent_change_24h": "-7.66",
//         "percent_change_7d": "-17.46",
//         "last_updated": "1517412541",
//         "price_eur": "0.9074606517",
//         "24h_volume_eur": "1249385692.19",
//         "market_cap_eur": "35154247782.0"
//     },
//     {
//         "id": "bitcoin-cash",
//         "name": "Bitcoin Cash",
//         "symbol": "BCH",
//         "rank": "4",
//         "price_usd": "1487.83",
//         "price_btc": "0.149315",
//         "24h_volume_usd": "842371000.0",
//         "market_cap_usd": "25206518294.0",
//         "available_supply": "16941800.0",
//         "total_supply": "16941800.0",
//         "max_supply": "21000000.0",
//         "percent_change_1h": "-0.42",
//         "percent_change_24h": "-5.36",
//         "percent_change_7d": "-9.24",
//         "last_updated": "1517412557",
//         "price_eur": "1195.62465149",
//         "24h_volume_eur": "676931862.713",
//         "market_cap_eur": "20256033721.0"
//     },
//     {
//         "id": "cardano",
//         "name": "Cardano",
//         "symbol": "ADA",
//         "rank": "5",
//         "price_usd": "0.505419",
//         "price_btc": "0.00005072",
//         "24h_volume_usd": "597154000.0",
//         "market_cap_usd": "13104034064.0",
//         "available_supply": "25927070538.0",
//         "total_supply": "31112483745.0",
//         "max_supply": "45000000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-10.47",
//         "percent_change_7d": "-16.64",
//         "last_updated": "1517412559",
//         "price_eur": "0.4061562247",
//         "24h_volume_eur": "479874745.862",
//         "market_cap_eur": "10530441086.0"
//     },
//     {
//         "id": "stellar",
//         "name": "Stellar",
//         "symbol": "XLM",
//         "rank": "6",
//         "price_usd": "0.53434",
//         "price_btc": "0.00005363",
//         "24h_volume_usd": "327765000.0",
//         "market_cap_usd": "9547965379.0",
//         "available_supply": "17868707899.0",
//         "total_supply": "103649583897",
//         "max_supply": null,
//         "percent_change_1h": "-1.42",
//         "percent_change_24h": "2.74",
//         "percent_change_7d": "-4.26",
//         "last_updated": "1517412544",
//         "price_eur": "0.429397227",
//         "24h_volume_eur": "263392937.295",
//         "market_cap_eur": "7672773622.0"
//     },
//     {
//         "id": "neo",
//         "name": "NEO",
//         "symbol": "NEO",
//         "rank": "7",
//         "price_usd": "142.445",
//         "price_btc": "0.0142955",
//         "24h_volume_usd": "494648000.0",
//         "market_cap_usd": "9258925000.0",
//         "available_supply": "65000000.0",
//         "total_supply": "100000000.0",
//         "max_supply": null,
//         "percent_change_1h": "-1.13",
//         "percent_change_24h": "-7.09",
//         "percent_change_7d": "5.61",
//         "last_updated": "1517412550",
//         "price_eur": "114.469229335",
//         "24h_volume_eur": "397500616.744",
//         "market_cap_eur": "7440499907.0"
//     },
//     {
//         "id": "litecoin",
//         "name": "Litecoin",
//         "symbol": "LTC",
//         "rank": "8",
//         "price_usd": "161.029",
//         "price_btc": "0.0161605",
//         "24h_volume_usd": "488125000.0",
//         "market_cap_usd": "8857578590.0",
//         "available_supply": "55006108.0",
//         "total_supply": "55006108.0",
//         "max_supply": "84000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-6.03",
//         "percent_change_7d": "-10.92",
//         "last_updated": "1517412541",
//         "price_eur": "129.403387487",
//         "24h_volume_eur": "392258714.375",
//         "market_cap_eur": "7117976727.0"
//     },
//     {
//         "id": "eos",
//         "name": "EOS",
//         "symbol": "EOS",
//         "rank": "9",
//         "price_usd": "11.6079",
//         "price_btc": "0.00116494",
//         "24h_volume_usd": "1309950000.0",
//         "market_cap_usd": "7424517298.0",
//         "available_supply": "639608999.0",
//         "total_supply": "900000000.0",
//         "max_supply": "1000000000.0",
//         "percent_change_1h": "-1.54",
//         "percent_change_24h": "-9.13",
//         "percent_change_7d": "-12.95",
//         "last_updated": "1517412556",
//         "price_eur": "9.3281432637",
//         "24h_volume_eur": "1052679749.85",
//         "market_cap_eur": "5966364375.0"
//     },
//     {
//         "id": "nem",
//         "name": "NEM",
//         "symbol": "XEM",
//         "rank": "10",
//         "price_usd": "0.752723",
//         "price_btc": "0.00007554",
//         "24h_volume_usd": "56599700.0",
//         "market_cap_usd": "6774506999.0",
//         "available_supply": "8999999999.0",
//         "total_supply": "8999999999.0",
//         "max_supply": null,
//         "percent_change_1h": "-1.69",
//         "percent_change_24h": "-10.66",
//         "percent_change_7d": "-21.21",
//         "last_updated": "1517412545",
//         "price_eur": "0.604890461",
//         "24h_volume_eur": "45483688.7191",
//         "market_cap_eur": "5444014148.0"
//     }
// ];

// const filterCrypto = crypto.filter(function (element) {
//     if (element['rank'] <= 5) {
//         return element
//     }
// })

// const mapRes = filterCrypto.map(element => element['name']);
// console.log(filterCrypto);
// console.log(mapRes);

// const filterCrypto = crypto.filter(element => element['rank'] <= 5 ? element : null).map(element => element['name']);
// console.log(filterCrypto);


// const even = numbers.filter(n => n % 2 !== 0);
// console.log(even); // [1, 3, 5, 7, 9]
//
// const inventors = [
//     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// let arrXIX = inventors.filter(el => el.year >1801 && el.year < 1900 ? el : null).map(el => el.first);
// console.log(arrXIX);
// console.log(inventors.length);


// // find
// const login = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
// console.log(login.indexOf('Newton'));
// let result = login[login.indexOf('Newton')];
// console.log(result);
// let findLlogin = inventors.find(function (el) {
//     return el.first === 'Nicolaus';
// });
// console.log(findLlogin);

//
// const findLogin = login.find(item => item === 'Einstein' );
// console.log(findLogin);
//
// // reduce
// const hoursWorkedPerWeek = [9, 8, 8, 8, 10, 5];

// const totalPerWeek = inventors.reduce(
//     (acc, element) => acc + (element.passed - element.year) , 0
// );
// console.log(totalPerWeek / inventors.length); // 48

// let superArr = [[1,5,10,11], [12,15,16,17], [25,65,47,89]];
//
// let flatArr = superArr.reduce((acum, element)=> acum.concat(element), [] );
//
// console.log(flatArr);
// let emptyArr = [];
// console.log(emptyArr.concat(superArr[0], superArr[1], superArr[2]));
//
// // every
//

// const money = [100,500,300,250, 5]; //[true, true, true, true]
// const go1 = money.every(function (element) {
//     return typeof element === 'number';
// });
// console.log(go1);
// const go = money.every(item => item >=100);
// console.log(go);
//
// // some
//
// const money2 = [100,500,300,250];
// const go = money2.some(function (element) {
//     return element >=500
// });
// console.log(go);
// const go2 = money2.some(item => item >=500);
// console.log(go2);
//
// // sort -1 before and 1 after
// let numbers2 = [4, 2, 5, 1, 3, 11];
// numbers2.sort(function(a, b) {
//  // if (a > b) {
//  //  return -1
//  // } else {
//  //  return 1
//  // }
//     return b - a;
// });

// [5,4,1,2]
// console.log(numbers2.sort());
// console.log(numbers2); // [1, 2, 3, 4, 5]
//