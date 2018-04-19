// let a = 'Моє ім\'я';
// console.log(a);
// let a = 'asdfghjkl;\\.';
// console.log(a);
// console.log(1 < 2);
// console.log(1 > 2);
// console.log(5 >= 1 + 4);
// console.log(5 >= 2 + 4);


// let a = '1';
// let b = 1;
// console.log(a = b);
// console.log(a == b);
// console.log(a === b);
//
// let a = 1;
// let b = '1';
// console.log(a === b);
// console.log(a == b);

// let a = 1;
// let b = '1';
// console.log(a > b);
// console.log(a < b);
// console.log(a !== b);
// console.log(a != b);

// console.log(a == b);
// console.log(a === b);
// let a = 1;
// let b ='2';
// console.log(a !== b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);


//
// let a = NaN,
//     b = NaN;
// console.log(a != b);
// console.log(a !== b);
// console.log(a == b);
// console.log(a === b);
//
// let a = 0,
//     b = null;
//
// console.log(a == b);
// console.log(a === b);
//
// let a = null,
//     b = null;
// console.log(a == b);
// console.log(a === b);

// let a = null,
//     b = undefined;
//
// console.log(a == b);
// console.log(a === b);

// let a = 0,
//     b = undefined;
// console.log(a == b);
// console.log(a === b);
//
// let a = 'a',
//     b = null;
// console.log(a == b);
// console.log(a === b);

// let a = '0',
//     b = 0;
// console.log(a == b);
// console.log(a === b);

// let a = 'H';
// let b = 'h';
//
// console.log(a == b);
// console.log(a === b);

// let c = "Hehlo";
// let d = "HeHlo";
// console.log(c == d);
// console.log(c === d);

// false
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(-0));
// console.log(Boolean(false));

// true
// console.log(Boolean('add'));
// console.log(Boolean(Infinity));
// console.log(Boolean(" "));
// console.log(Boolean(1));


// console.log(1 || 2 || '0');
// console.log(0 || 2 || '0');
// console.log(0 || null || '0');
// console.log(0 || null || undefined);
// console.log(0 || null || 'undefined');
// console.log(NaN || null || 5);
// console.log(28 || null || '');
// console.log(Infinity || 55 || NaN);
// console.log(undefined || 'true' || NaN);

// console.log('a' && 1 && 0);
// console.log('a' && 1 && 2);
// console.log('a' && 0 && 2);
// console.log('0' && NaN && 2);
// console.log('' && NaN && 2);
// console.log(' ' && NaN && 2);
// console.log({age:25} && 'null' && 2);
// console.log({age:25} && null && 2);
// console.log({age:25} && undefined && 2);
// console.log({age:25} && 8 && -Infinity);
// console.log(false && 'false' && -Infinity);
// console.log('true' && -0 && null);

// true && false
// console.log(1 == 1 && 2 === '2');
// console.log((1 == 1) && (2 == '2'));
// console.log((1 == 1) || (2 === '2'));
// console.log((1 >= 5) || (2 == '2'));
// console.log((1 >= 5) || (2 === '2'));
// console.log((1 == 2) || (2 === 3) && (4 == 5));
// console.log((1 == 1) || (2 === 3) && (4 == 5));

// на право піду в метро попаду
// на ліво піду до дому не попаду

// let turn = prompt("Ти куди ?");
// console.log(turn); // На право
//
// if (turn === 'right' || turn === 'На право' || turn === 'Yf ghfdj') {
//     console.log("Метро");
// } else {
//     console.log("Немає метро");
// }

// let turn = prompt("Куди ти повернеш?").toLowerCase();
// // let lower = turn.toLowerCase();
// console.log(turn);
// let buy = prompt("Buy a ticket?");
// let take = prompt("Take a ride?");
// if (turn === "right" && buy === "buy" && take === "take"){
//     document.write("Welcome home, little bitch")
// }else{
//     document.write("Take a home on foot John Snow!!!");
// }

// Написати код який показує пору року в залежності від номера місяця який ми ввели.

// 1) Написати код який попроситьс в користувача ввести номер місяця
// 2) Написати перевірку яка виведе нам на екран "Зима" якщо користувач ввів числа або 12 або 1 або 2.
// 3) весна 3 або 4 або 5.
// 4) літо 6 або 7 або 8.
// 5) осінь 9 або 10 або 11.
// 6) Перевірка на помилки.

// let month = +prompt('Введи номер місяця');
// console.log(month);
// if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима')
// }
// else if (month === 3 || month === 4 || month === 5) {
//     console.log('Весна')
// }
// else if (month === 6 || month === 7 || month === 8) {
//     console.log('Літо')
// }
// else if (month === 9 || month === 10 || month === 11) {
//     console.log('Осінь')
// }
// else {
//     console.log('Error')
// }

// let condition = true;
//
// if (condition) {
//     console.log('Evrika');
// }


// let condition = false;
//
// if (condition) {
//     console.log('Evrika');
// }

// let condition = true;
//
// if (condition) {
//     console.log('Evrika');
// } else {
//     console.log('Losser');
// }

// let condition = false;
//
// if (condition) {
//     console.log('Evrika');
// } else {
//     console.log('Losser');
// }

// let car = prompt('Enter car brend');
//
// if (car === 'Audi') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }
// f
// let car = prompt('Enter car brend');
//
// if (car === 'Audi' || 'BMW' || 'Opel') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets" || "Traktor") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }

//
// let car = prompt('Enter car brend');
//
// if (car === 'Audi' || car === 'BMW' || car === 'Opel') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets" || car === "Traktor") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }

//
// let myTime = prompt("what hour is it?");
//
// if(myTime >= 8 && myTime < 12) {
//     console.log("Wake up its morning");
// } else if (myTime >= 12 && myTime < 13) {
//     console.log("go to Lunch");
// } else if (myTime >= 13 && myTime <= 16) {
//     console.log("Go to work");
// } else if (myTime >16 && myTime < 20) {
//     console.log("Dinner Time");
// } else if (myTime >= 22) {
//     console.log("Time to go to sleep");
// } else {
//     console.log("You should be sleeping");
// }
//
// let luckyNumber = '2';
//
// switch (luckyNumber) {
//     case 1:
//     case '2':
//     case 3:
//         console.log('test');
//         break;
//     case 8:
//         console.log("this is 8");
//         break;
//     case 7:
//         console.log("You win");
//         break;
//     default:
//         console.log('error');
//         break;
// }

// if (luckyNumber === 1) {
//     console.log('it is one');
// } else if (luckyNumber === 8) {
//     console.log("this is 8");
// } else if (luckyNumber === 7) {
//     console.log("You win");
// } else {
//     console.log('error');
// }

// switch (luckyNumber) {
//     case 1 :
//         console.log('it is 1');
//         break;
//     case 8:
//         console.log('It is 8');
//         break;
//     default:
//         console.log('default');
//         break;
// }
 // забрати break


// let a = 5;
// let b = 5;
// if (a === b) {
//     console.log('true');
// } else {
//     console.log('false');
// }
//

// let result = a === b ? 'true' : 'false';
// console.log(result);

// let test = 5 > 6 ? 'Evrika' : 'Too bad';
// console.log(test);

// let color = prompt('Enter color');
//
// let result = color === 'white' || color === 'red' || color === 'green' ? "Day" : "Night";
// console.log(result);

// 1 && '5' & 2
// 'a'&& null & '0'
// 1 && undefined & 5
















