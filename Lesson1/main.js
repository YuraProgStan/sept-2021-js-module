// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com',
// 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//- Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
let aNew = 'hello';

console.log(aNew);
alert(aNew);
document.write(aNew);

aNew = 'hello world';

let bNew = 'owu';

console.log(bNew);
alert(bNew);
document.write(bNew)

bNew = 'owu is cool';

let cNew = 'com';
console.log(cNew);
alert(cNew);
document.write(cNew);

cNew = 'commit';

let d = 'ua';

console.log(d);
alert(d);
document.write(d);

d = 'Ukraine';

let e = 1;

console.log(e);
alert(e);
document.write(e);

e = 15;

let f = 10;

console.log(f);
alert(f);
document.write(f);

f = 0;

let g = -999;

console.log(g);
alert(g);
document.write(g);

g = -1000;

let h = 123;

console.log(h);
alert(h);
document.write(h);

h = 108;

let p = 3.14;

console.log(p);
alert(p);
document.write(p);

p = 6.987;

let k = 2.7;

console.log(k);
alert(k);
document.write(k);

k = 4.9;

let l = 16;
console.log(l);
alert(l);
document.write(l);

l = 94;

let m = true;
console.log(m);
alert(m);
document.write(m);

m = false;

let n = false;
console.log(n);
alert(n);
document.write(n);

n = true;
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName;
let middleName;
let lastName;
firstName = 'Юрій';
middleName = 'Анатолійович';
lastName = 'Станішевський'
let person;

person1 = firstName + ' ' + middleName + ' ' + lastName;
peron = `${firstName} ${middleName} ${lastName}`;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let myName = prompt('Enter your name');
let myMiddleName = prompt('Enter your middle name');
let myYears = prompt('How old are you?');
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
document.write(`Вітаю ${myName} ${myMiddleName}. Тобі ${myYears} років`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 = 100;
console.log(typeof a1);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
console.log(typeof (5 < 6));
// 5 ? 6 -> false
console.log(typeof (5 > 6));
// 5 ? 6 -> false
console.log(typeof (5 === 6));
// 5 ? 6 -> false
console.log(typeof (5 == 6));
// 10 ? 10 -> true
console.log(typeof (10 === 10));
// 10 ? 10 -> true
console.log(typeof (10 == 10));
// 10 ? 10 -> false
console.log(typeof (10 > 10));
// 10 ? 10 -> false
console.log(typeof (10 < 10));
// 10 ? 10 -> false
console.log(typeof (10 !== 10));
// 123 ? '123' -> false
console.log(typeof (123 === 123));
// 123 ? '123' -> true
console.log(typeof (123 == 123));
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
let a = 5;
document.write(str + a + "<br/>");
//205 - браузер преобразовывает число 5 в string "5" и объединяет 2 строки вместе выполняя операцию конкантенации
document.write(str - a + "<br/>");
//15 - браузер преобразовывает string "20" в число 20 и выполняет операцию вычитания двух чисел,
// так как вычитание string - string даст NaN.
document.write(str * "2" + "<br/>");
//40 - браузер преобразовывает string "20" в число 20 и string "2" в число 2, 20 x 2 = 40
// так как умножение string x string даст NaN.
document.write(str / 2 + "<br/>");
//10 - браузер преобразовывает string "20" в число 20, 20 / 2 = 10