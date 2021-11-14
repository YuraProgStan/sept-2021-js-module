/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
let time = Math.floor(Math.random() * 59 + 1);
console.log(time);
if (time >= 0 && time <= 15) {
    console.log('перша чверть');
} else if (time > 15 && time <= 30) {
    console.log('друга чверть');
} else if (time > 30 && time <= 45) {
    console.log('третя чверть');
} else console.log('четверта чверть');
/*
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/
let day = Math.floor(Math.random() * 31 + 1);
console.log(day);
switch (true) {
    case day < 11 :
        console.log('перша декада');
        break;
    case day < 21 :
        console.log('друга декада');
        break;
    default:
        console.log('третя декада');
}

//або
{
    let day = Math.floor(Math.random() * 31 + 1);
    console.log(day);
    if (day >= 1 && day <= 10) {
        console.log('перша декада');
    } else if (day > 10 && day <= 20) {
        console.log('друга декада');
    } else {
        console.log('третя декада');
    }
    /*   const start = performance.now();
    ...code
    const end = performance.now();
      console.log('Время выполнения = ', end-start); //мкс (10*-6 с)*/
}

/*- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)*/
let test;
test = false;
if (!test) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}
//або

test !== true ? console.log('Вірно') : console.log('Неправильно');

/*- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
let a;
a = 1;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.*/
let day1 = +prompt("Введіть порядковий номер дня тижня від 1 до 7");
switch (day1) {
    case 1:
        console.log('Cьогодні понеділок, вивчаємо HTML/CSS.');
        break;
    case 2:
        console.log('Cьогодні вівторок, вивчаємо JS.');
        break;
    case 3:
        console.log('Cьогодні середа, вивчаємо React.');
        break;
    case 4:
        console.log('Cьогодні четверг, вивчаємо Angular.');
        break;
    case 5:
        console.log('Cьогодні п\'ятниця, вивчаємо Node.js.');
        break;
    case 6:
        console.log('Cьогодні субота, вивчаємо англійську');
        break;
    case 7:
        console.log('Cьогодні неділя, відпочиваємо.');
        break;
    default:
        console.log('Некоректно введено номер дня тижня.');

}

/*- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.*/
let year = +prompt('Введіть рік для визначення високосності');
if (year === year ** 1 && year > 0) {  //исключаем не числа и берем  годы > 0
    if (!!(year % 4)) {
        console.log('не високосний');
    } else {
        console.log('високосний');
    }
//або
    if (year % 4 !== 0) {
        console.log('не високосний');
    } else {
        console.log('високосний');
    }
} else {
    console.log('Невірно введено рік');
}
/*
- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!*/
let nameJS = prompt('Яка «офіційна» назва JavaScript?');
if (nameJS === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}