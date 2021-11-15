/*1. Створити пустий масив та :
    a. заповнити його 50 парними числами за допомоги циклу.
    b. заповнити його 50 непарними числами за допомоги циклу.
    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/

let array1 = [];
for (let i = 0; i < 50; i++) {
    array1[i] =Math.floor(Math.random() * 10 + 1) * 2;
}
console.log(array1);
console.log('=============================================');
for (let i = 0; i < 50; i++) {
    array1[i] = (Math.floor(Math.random() * 10 + 1) * 2) + 1;
}
console.log(array1);
console.log('=============================================');
//Math.floor(Math.random( ) * (max - min + 1)) + min
for (let i = 0; i < 20; i++) {
    array1[i] = Math.floor(Math.random() * (-50))-1;
}
console.log(array1);
console.log('=============================================');
for (let i = 20; i < 40; i++) {
    array1[i] = Math.floor(Math.random() * 725)+8;
}
console.log(array1);
console.log('=============================================');
/*2. Вивести за допомогою console.log кожен третій елемен*/
for (let i = 0; i < array1.length; i+=3) {
    console.log(array1[i]);
}
console.log('=============================================');
/*3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
for (let i = 0; i < array1.length; i+=3) {
    if(array1[i]%2 === 0){
    console.log(array1[i]);
    }
}
console.log('=============================================');
/*4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив*/
let array2 = [];
let n = 0;
for (let i = 0; i < array1.length; i+=3) {
    if(array1[i]%2 === 0){
        console.log(array1[i]);
        array2[n] = array1[i];
        n++;
    }
}
console.log(array2);
console.log('=============================================');
/*5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/
console.log(array1);
for (let i = 0; i < array1.length; i++) {
    if(array1[i+1]%2 === 0){
        console.log(array1[i]);
    }
}
console.log('=============================================');
/*6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/
let array3 = [100,250,50,168,120,345,188];
console.log(array3);
let middlePrice;
let result = 0;
for (let price of array3) {
    result += price;
    console.log(result);
}
middlePrice = result / array3.length;
console.log('middlePrice = '+ middlePrice.toFixed(2));
/*7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/
let array4 = [];
let array5 = [];
let num = 0;

for (let i = 0; i < 10; i++) {
    array4[i] = Math.floor(Math.random() * 50 + 1) ;
}
console.log (array4);
for (let element of array4) {
    array5[num] = element*5;
    num++;
}
console.log (array5);
//aбо
for (let i = 0; i < array4.length; i++) {
    array5[i] = array4[i]*5;
}
console.log (array5);
console.log('=============================================');
/*8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/
let array8 = [];
let array9 = [];
let num9 = 0;
for (let i = 0; i < 5; i++) {
    array8[i] = Math.floor(Math.random()*50 + 1);
}
for (let i = 5; i < 8; i++) {
    array8[i] = Math.random().toString(36).substr(5, 10).split('').map(c => Math.random() < 0.5? c.toUpperCase(): c).join('');
}
for (let i = 8; i < 10; i++) {
    array8[i] = Boolean(Math.round(Math.random()));
}
console.log(array8);
for (const element of array8) {
    if(typeof element === 'number'){
        array9[num9] = element;
        num9++;
    }

}
console.log(array9);
//або
num9 = 0;
for (let i = 0; i < array8.length; i++) {
    if(typeof array8[i] === 'number'){
        array9[num9] = array8[i];
        num9++;
    }

}
console.log(array9);
console.log('=============================================');


/*
- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив
Example:
    let usersWithCities = [
            {
                id: 1, // <===
                name: 'vasya',
                age: 31,
                status: false,
                address: {
                    user_id: 1, // <===
                    country: 'Ukraine',
                    city: 'Ternopil'
                }
            },
            // TO BE CONTINUED .....
        ]

*/
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities =[];
let numWithCities = 0;
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
    if(usersWithId[i].id === citiesWithId[j].user_id) {
        usersWithCities[numWithCities] = usersWithId[i];
        usersWithCities[numWithCities].address = citiesWithId[j];
    }
    }
    numWithCities++;
}
console.log(usersWithCities);
console.log('=============================================');

/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/
let array10 = [];
for (let i = 0; i < 10; i++) {
    array10[i] = Math.floor(Math.random() * 50 + 1) ;

}
for (let element of array10) {
    if (element % 2 === 0){
        console.log(element);
    }
}
console.log('=============================================');


/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/

let array11 = [];
let array12 = [];
for (let i = 0; i < 10; i++) {
    array11[i] = Math.floor(Math.random() * 50 + 1) ;
}
console.log(array11);
for (let i = 0; i < array11.length; i++) {
    array12[i] = array11[i];
}
console.log(array12);
console.log('=============================================');


/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/
arrayLast = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < arrayLast.length; i++) {
    word += arrayLast[i];
}
console.log(word);
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
word = '';
let i = 0;
while (i < arrayLast.length){
    word += arrayLast[i];
    i++;
}
console.log(word);
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/
word = '';
for (let element of arrayLast) {
    word += element;
}
console.log(word);
