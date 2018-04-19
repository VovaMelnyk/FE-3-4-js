// Math.random	Псевдослучайное число в диапазоне [0, 1), т.е. включая 0, но исключая 1.
// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.ceil(5.9999));
// console.log(Math.floor(5.99999));
// console.log(Math.round(5.999));
// console.log(Math.round(5.53));
// Math.max(a, b, c)	Возвращает наибольшее из чисел, перечисленных через запятую в круглых скобках (наибольший аргумент)
// Math.min(a, b, c)	Возвращает наименьшее из чисел, перечисленных через запятую в круглых скобках (наименьший аргумент)
// console.log(Math.max(2,5,6,1));
// console.log(Math.min(2, 5, -5, 0));
// Math.ceil(0.5)	Округление вверх: 1
// Math.floor(0.5)	Округление вниз: 0. Используется для точного распредления Math.random()
// Math.round(0.5)	Округление до ближайшего целого: 1
// Math.(base, exponent)	возведение числа base в степень exponent
// Math.PI	число π: 3.14...
// Math.pow,
// console.log(Math.pow(125, 1/3));
// console.log(Math.sqrt(36));

// let year = +prompt('Please insert year of your birth');
// if(year < 0){
//     alert('U are stupid whore!!!')
// }else{
//     let century = (year + 1) / 100;
//     alert(Math.ceil(century));
// }



// let firstArray = [1,2,3];
// let secondArray = new Array(5,6,7,8);
// console.log(firstArray, secondArray);

// let firstArray = [1,2,3];
// // console.log(firstArray.length);
// console.log(firstArray[0]);
// console.log(firstArray[2]);
// console.log(firstArray[3]);
// let arr = [1,2,3,[5,6,[54,56,98,[25.3,58,385,[2,3,['Error']]]]]];
// console.log(arr[3][2][3][3][2][0]);

// replace
// let firstArray = [1,2,3];
// firstArray[1] = 100;
// firstArray[3] = 6;
// firstArray[6] = 25;
// console.log(firstArray);

// push
// let firstArray = [1,2,3];
// firstArray[3] = 6;
// firstArray.push(10);
// firstArray.push(11);
// firstArray.push(12);
// console.log(firstArray);

// pop
// let firstArray = [1,2,3];
// let Del = firstArray.pop();
// console.log(Del);
// console.log(firstArray);

// shift

// let firstArray = [1,2,3,4];
// console.log(firstArray.shift());
// console.log(firstArray);

// unshift

// let firstArray = [1,2,3,4];
// firstArray.unshift(27);
// console.log(firstArray);

// indexOf
//
// let firstArray = ['a', 'c', 'b', 'd'];
// console.log(firstArray[firstArray.indexOf('b')]);
// console.log(firstArray[2]);
// console.log(firstArray.indexOf('f'));
// firstArray[firstArray.indexOf(1)] = 'new number';
// console.log(firstArray);

// includes

// let firstArray = [1,2,3,4];
// firstArray[100] = 'error';
// console.log(firstArray);
// console.log(Boolean(firstArray[65]));
// console.log(firstArray.includes(4));
// firstArray.push('test');
// console.log(firstArray.includes('test'));
// console.log(firstArray.includes('t'));
// let users = ['Jon', 'Frank', 'Mick'];
// let newUser = prompt('Enter name');
// console.log(users.includes(newUser));



// задачка на логін користувача


// splice start index and how many
// let firstArray = [10, 8, 7, 5];
// let newArr = firstArray.splice(1);
// console.log(newArr);
// console.log(firstArray);
// let newArr = firstArray.splice(1,2);
// let newArr = firstArray.splice(-1);
// console.log(newArr);
// console.log(firstArray);

// slice start index and end index do not include

// let firstArray = [10, 8, 7, 5];
// let newArr = firstArray.slice(1);
// console.log(newArr);
// console.log(firstArray);

// reverse
// let firstArray = [10, 8, 7, 5];
// console.log(firstArray.reverse());
// // palindrome
//
// let str = 'Hello';
// console.log(str.split('').reverse().join(''));

// concat

// let firstArray = [10, 8, 7, 5];
// let newArray = ['add me', 'join us'];
// let result = firstArray.concat(newArray);
// console.log(result);
// console.log(firstArray);
// console.log(newArray);

// sort

// let clients = ["Mango", "Ajax", "Poly", "Chelsey"];
// let numbers = [1, 5 , 7];
// console.log(clients.sort());
// console.log(numbers.sort());
// console.log(clients);
// console.log(numbers);


// Вгадати тварину загадану компютером

// компютер загадує випадкову тварину з списку
// просить користувача ввести свій варіант
// відбувається перевірка значень компютера і користувача
// Виводить через alert результат, вгадав чи не вгадав. якщо не вгадав тоді додатково показує що було загадано.













// let animals = ["cat","dog","rabbit","bird","fish"];
// let random = Math.floor(Math.random()*animals.length);
// console.log(random);
// let randomAnimal = animals[random];
// console.log(randomAnimal);
// let result = prompt('Enter animals "cat","dog","rabbit","bird","fish"');
//
// if (randomAnimal === result) {
//     alert('ok')
// } else {
//     alert(`Wrong ${randomAnimal}`)
// }

// let quotes = ['Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський','Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон', 'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней', 'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс','Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі', 'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі', 'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн','Іноді щось може йти не так, як хотілося-б, але ви не повинні зупинятися. – Майкл Джордан','Будь собою, інші ролі зайняті. – Оскар Уайльд'];


// let randomIndex = Math.floor(Math.random()*animals.length);
// let randomAnimal = animals[randomIndex];
// let message = prompt("which animal computer chose?" );
// let response = (message === randomAnimal) ? "Correct" : `Wrong it was ${randomAnimal}`;
// alert(response);

// let arr = [["cat","dog","fish"],[4,2,5,6,6,4],"hello",50];
// let ourFriends = [["Mike","John","Larry"],[1980,1990,2016]];

// while


// let number = 10;
// let arr = [];
// поки номер меньше 7 виводб в консоль цей номер і потім збільшуй на 1
// while (number > 1) {
//     let result = prompt('Enter number');
//     arr.push(result);
//     number--;
// }
// console.log(arr);

// while (number >= 0 ) {
//     console.log(number);
//     number--;
// }

// let condition = true;
// let i = 2;
//
// while (condition) {
//     if (i === 3) {
//         condition = false
//     }
//     console.log(i);
//     i++;
// }


// do while

// let condition = 1;
// do {
//     console.log('Done');
//     condition++;
// }
// while (condition < 5);

// for
// особливість let i var




// for (let i = 0; i < 10; i++ ) {
//     console.log(i);
// }
// console.log(i);



// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// nested loops

// for (let i = 0; i < 5; i++) {
//     for (let j = 5; j < 7; j++) {
//         console.log(i*j);
//     }
// }

// break and continue

// for (let i = 0; i < 5; i++ ){
//     if (i === 3) {
//         console.log('test');
//         break
        // continue
    // }
    // console.log(i);
// }
// let newArr = [];
//  let animals = ["cat","dog","rabbit","bird","fish"];
// for (let i = 0, max = animals.length; i < max; i++ ) {
//     if (animals[i] === 'rabbit') {
//         continue
//     }
//     console.log(animals[i]);
//     newArr.push(animals[i]);
// }
// console.log(newArr);

// let arr = [
//     [[1],[2],[3]],
//     [[4],[5],[6]],
//     [[7],[8],[9]]
// ];
// console.log(arr[1][1][0]);

// let students = [1,2,3,4,5,6,7,8,9,10,11,12];
//
// let result = [
//     [1,5,7,4],
//     [2,8,10,12],
//     [3,6,9,11]
// ];



// arr and loop

// let arr = [5,8,'w','wewqr'];
// for (let i = 0, max = arr.length; i < max; i++) {
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let arr = [1,2,3,4];
// for (let i = 0, max = arr.length; i < max; i++) {
//     console.log(arr[i]);
// }
// let userNames = ["mike", "john", "larry"];
//
// let x = 0;
// while (userNames[x]) {
//     console.log(userNames[x]);
//     x++;
// }


// shoping list 

// let addItem;
// let shoppingList = [];
// let howManyTimes = +prompt("How many items would you like to add?");
// for(let x = 0; x< howManyTimes; x++){
//     addItem = prompt("What do you want to add?");
//     if(addItem === null){
//         break;
//     }
//     shoppingList.push(addItem);
// }
// console.log(shoppingList);
//
// for( myItem of shoppingList){
//     console.log(myItem);
// }




// let clients = ['Mango', 'Ajax', 'Poly'];
//
// for(let value of clients) {
//     console.log(value);
// }