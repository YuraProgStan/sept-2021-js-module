/*--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/
let array1 = [1, 3, 5, 8, 10];
array1[5] = 'value1';
array1[6] = 'value2';
array1[7] = 'value3';
array1[8] = 'value4';
array1[9] = 'value5';
array1[10] = 1;
array1[11] = 7;
array1[12] = 'value12';
array1[13] = true;
array1[14] = false;
//або
array1String = ['value1', 'value2', 'value3', 'value4', 'value5'];
array1Different = [1, 7, 'value12', true, false];
console.log(array1);
console.log(array1Different);

console.log('========================================');
/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
let array4 = [];
array4[0] = 5;
array4[1] = 'text';
array4[2] = true;
array4[3] = {key1: 'some value'};
console.log(array4);
console.log('========================================');

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
for (let i = 0; i < 10; i++) {
    document.write('<div>Some text</div>');
}
document.write('<hr>');
/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
for (let i = 0; i < 10; i++) {
    document.write(`<div>Some text and index = ${i}</div>`);
}
document.write('<hr>');
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
let i = 0;
while (i < 20) {
    document.write('<h1>Another text</h1>');
    i++;
}
document.write('<hr>');
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/
let j = 0;
while (j < 20) {
    document.write(`<h1>Another text index = ${j}</h1>`);
    j++;
}
document.write('<hr>');
/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/
let array5 = [];
for (let i = 0; i < 10; i++) {
    array5[i] = Math.floor(Math.random()*100 + 1);
}
for (const key of array5) {
    console.log(key);
}
console.log('========================================');
/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
let array6 = [];
array6 = ['fsfa', 'sfasdfa', 'sdfasfa', 'dsfa', 'dfsffsfdf', 'dsfaf', 'sfaf', 'dgdfg', 'dgdasgd', 'fadf'];

//або random string
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let length;
let charactersLength = characters.length;
for (let i = 0; i < 10; i++) {
    //Math.floor(Math.random( ) * (max - min + 1)) + min
    array6[i] = '';
    length = Math.floor(Math.random( ) * 6) + 5;
    for (let j = 0; j < length; j++)
    {
    array6[i] +=  characters.charAt(Math.floor(Math.random() * charactersLength));
    }
}

for (let key of array6) {
    console.log(key);
}
console.log('========================================');
/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
let array7 = [];
for (let i = 0; i < 5; i++) {
    array7[i] = Math.floor(Math.random()*100 + 1);
}
for (let i = 5; i < 8; i++) {
    array7[i] = Math.random().toString(36).substr(5, 10).split('').map(c => Math.random() < 0.5? c.toUpperCase(): c).join('');
}
for (let i = 8; i < 10; i++) {
    array7[i] = Boolean(Math.round(Math.random()));
}

for (const key of array7) {
    console.log(key);
}
console.log('=======================================');
/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/
/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/
/*- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/
let array8 = [];
for (let i = 0; i < 5; i++) {
    array8[i] = Math.floor(Math.random()*100 + 1);
}
for (let i = 5; i < 8; i++) {
    array8[i] = Math.random().toString(36).substr(5, 10).split('').map(c => Math.random() < 0.5? c.toUpperCase(): c).join('');
}
for (let i = 8; i < 10; i++) {
    array8[i] = Boolean(Math.round(Math.random()));
}
for (let key of array8) {
    if (typeof key === 'boolean')
    {
    console.log(key);
    }
}
console.log('----------------------------------------')
for (let key of array8) {
    if (typeof key === 'number')
    {
        console.log(key);
    }
}
console.log('----------------------------------------')
for (let key of array8) {
    if (typeof key === 'string')
    {
        console.log(key);
    }
}
console.log('========================================');
/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/
let array9 = [];
for (let i = 0; i < 3; i++) {
    array9[i] = Math.floor(Math.random()*100 + 1);
}
for (let i = 3; i < 7; i++) {
    array9[i] = Math.random().toString(36).substr(5, 10).split('').map(c => Math.random() < 0.5? c.toUpperCase(): c).join('');
}
for (let i = 7; i < 10; i++) {
    array9[i] = Boolean(Math.round(Math.random()));
}

for (let k = 0; k < array9.length; k++) {
    let val = array9[k];
    console.log(val);
}
console.log('========================================');
/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/

for (let k = 0; k < 10; k++) {
    console.log(k);
    document.write(`<div>${k}</div>`);
}
document.write('<hr>');
/*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
console.log('========================================');
for (let k = 0; k < 100; k++) {
    console.log(k);
    document.write(`<div>${k}</div>`);
}
document.write('<hr>');
/*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
console.log('========================================');
for (let k = 0; k < 100; k += 2) {
    console.log(k);
    document.write(`<div>${k}</div>`);
}
document.write('<hr>');
/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
console.log('========================================');
for (let k = 0; k < 100; k++) {
    if (k % 2 === 0) {
        console.log(k);
        document.write(`<div>${k}</div>`);
    }
}
document.write('<hr>');
/*
- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
for (let k = 0; k < 100; k++) {
    if (k % 2 !== 0) {
        console.log(k);
        document.write(`<div>${k}</div>`);
    }
}