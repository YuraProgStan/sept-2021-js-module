// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let array = [];
for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 30);
    console.log(array[i]);
}
let result = 0;
for (let value of array) {
    result += value;
}
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    nazva: 'Гра престолів',
    kilkistStorinok: 150,
    zhanr: 'fantazy'
}
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
{
    let book = {
        nazva: 'Гра престолів',
        kilkistStorinok: 150,
        zhanr: 'fantazy',
        avtory: ['Джордж Мартін', 'Another avtor']
    }
}
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

{
    let book = [{
        nazva: 'Гра престолів',
        kilkistStorinok: 150,
        zhanr: 'fantazy',
        avtory: ['Джордж Мартін', 'Another avtor']
    },
        {
            nazva: 'Стрілець',
            kilkistStorinok: 200,
            zhanr: 'fantazy',
            avtory: ['Stiven King', 'Another avtor']
        }]

    for (let object of book) {
        console.log(object);
    }
}
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s + 'см²'); //ALT + 0178

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI * ((dC / 2) ** 2) * 10;
console.log(v + " ≈ " + Math.round(v) + 'м³'); //ALT + 0179
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log('Гіпотенуза дорінює ' + k);