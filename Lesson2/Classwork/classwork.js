/*- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.*/

let number1 = +prompt("Введіть число");
let number2 = +prompt("Введіть число");
if (number1 > number2) {
    console.log(number1);
} else if (number2 > number1) {
    console.log(number2);
} else {
    console.log('Ви ввели однакові числа');
}
//або
if (number1 !== number2) {
    console.log(Math.max(number1, number2));
} else {
    console.log('Ви ввели однакові числа');
}
//або
number1 > number2 ? console.log(number1) : number2 > number1 ? console.log(number2) : console.log('Ви ввели однакові числа');
/*- У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
    Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.*/
let apartment = +prompt('Введіть номер кварти для визначення під\'їзду будинку. В будинку є 90 квартир');
if (apartment >= 1 && apartment <= 20) {
    console.log('Квартира знаходиться в I під\'їзді');
} else if (apartment > 20 && apartment <= 48) {
    console.log('Квартира знаходиться в II під\'їзді');
} else if (apartment > 48 && apartment <= 90) {
    console.log('Квартира знаходиться в III під\'їзді');
} else {
    console.log('Ви ввели  номер квартири, якого немає в будинку');
}

/*
- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
*/

let variable = +prompt('Введіть число');
if (variable === 10) {
    console.log('ВІРНО');
} else {
    console.log('НЕВІРНО');
}
/*- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else*/
let var2;
var2 = 5;
let type = typeof var2;
let value;
if (type === 'number' && var2 === var2) { //var2===var2 исключаеа NaN (NaN!==NaN)
    value = 1;
    console.log(value);
} else if (type === 'string') {
    value = 2;
    console.log(value);
} else if (type === 'boolean' || type === 'object') {
    value = 3;
    console.log(value);
} else {
    console.log('another value', var2);
}

//або
let data, val;
data = prompt('Введіть будь-яке значення');
val = 'не задано';
if (data === null) {
    type = 'null';
}
else if (data === ""){
    type = 'undefined';
}
else if (+data === data ** 1) {
    val = 1;
    type = 'number';
}
else if (data === 'false'|| data === 'true') {
    val = 3;
    type = 'boolean';
}
else {
    val = 2;
    type = 'string';
}
console.log(`Tип даних - ${type} (${data}): val = ${val}`);

/*
- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
    Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
    Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
*/
let temp;
temp = 10;
if (temp >= 10 && temp <= 22) {
    console.log('Ми йдемо ВЧИТИСЯ')
} else {
    console.log('Сидимо вдома і вчимося ОНЛАЙН')
}


/*
- За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
    числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .*/
let num = prompt('Введіть число від 1 до 5');
let gift;
switch (num) {
    case '1' :
        gift = 'Авто';
        break;
    case '2' :
        gift = 'Мото';
        break;
    case '3' :
        gift = 'Телефон';
        break;
    case '4' :
        gift = 'Яхту';
        break;
    case '5' :
        gift = 'Будинок';
        break;
    default:
        console.log('Число не вірне');

}
if(gift) {
    console.log(`Ви виграли ${gift}`);
}