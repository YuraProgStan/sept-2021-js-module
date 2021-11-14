/*
- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
    Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
*/

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
let text;
if (friends.length >= 3) {
    text = 'це великий масив, в якому  3 і більше елементів';
} else {
    text = 'це маленький масив, в якому менше 3-х елементів';
}
console.log(text);
/*- Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
    Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.*/

let num1, num2, num3, middle;
num1 = 4;
num2 = -5;
num3 = 50;
if (num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2) {
    middle = num1;
} else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1) {
    middle = num2;
} else if (num3 > num2 && num3 < num1 || num3 > num1 && num3 < num2) {
    middle = num3;
} else {
    console.log('невірно введені числа, необхідно ввести 3 різних числа')
}
if(middle) {
    console.log(middle);
}
//або
middle = num1 + num2 + num3 - Math.min (num1, num2, num3) - Math.max (num1, num2, num3);
if(middle && num1!==num2 && num1!==num3 && num2!==num3) {
    console.log(middle);
}
else {
    console.log('невірно введені числа, необхідно ввести 3 різних числа');
}
//або
let arr = [num1, num2, num3].sort((a, b) => a - b);
middle = arr[1];
if(middle && num1!==num2 && num1!==num3 && num2!==num3) {
    console.log(middle);
}
else {
    console.log('невірно введені числа, необхідно ввести 3 різних числа');
}
//

/*- Перепишіть конструкцію if з використанням умовного оператора '?':
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Багато';
}*/

let result, a, b;
a = 2;
b = 2;
a + b < 4 ? result = 'Мало' : result = 'Багато';
console.log(result);
/*
- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
напишіть це тернарним оператором*/
//Math.floor(Math.random( ) * (max - min + 1)) + min
let num = Math.floor(Math.random( ) * 201) -100;
let res;
num > 0 ? res = "позитивним" : num < 0 ? res = "негативним" : res = "нуль";
console.log(num,'число є '+ res);

