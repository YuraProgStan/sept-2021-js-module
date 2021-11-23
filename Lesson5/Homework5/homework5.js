/*Всі функції повинні бути описані стрілочним типом!!!!*/
    // - створити функцію яка обчислює та повертає площу прямокутника висотою
const arreaReactangleFoo = (a, b) => a * b;
console.log(arreaReactangleFoo(5, 10));
console.log('============================');
// - створити функцію яка обчислює та повертає площу кола
const arreaCircleFoo = (r) => (Math.PI * r ** 2).toFixed(2);
console.log(arreaCircleFoo(10));
console.log('============================');
// - створити функцію яка обчислює та повертає площу циліндру
const arreasCylinderFoo = (r, h) => {
    return [(2 * Math.PI * r * h).toFixed(2), (2 * Math.PI * r * (h + r)).toFixed(2)];
}
let arreaCyl = arreasCylinderFoo(10, 20);
console.log('sLateralSurfaceCyl = ' + arreaCyl[0]);
console.log('sTotalSurfaceCyl = ' + arreaCyl[1]);
console.log('============================');
// - створити функцію яка приймає масив та виводить кожен його елемент
const arrElement = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement) ;
    }
}
arrElement([true,'value', 5, 7, 9]);
console.log('============================');
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const paragraphFoo = (text) => {
    document.write(`<p>${text}</p>`);
}
paragraphFoo('Some text');
document.write('<hr>');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulLiFoo = (text) => {
    document.write('<ul>');
    for (i = 0; i < 3; i++){
    document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
ulLiFoo('Some text');
document.write('<hr>');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ulLiLengthFoo = (text, length) => {
    document.write('<ul>');
    for (i = 0; i < length; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
ulLiLengthFoo('Some text', 5);
document.write('<hr>');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrListFoo = (arr) => {
    document.write('<ul>');
    for (i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'|| typeof arr[i] === 'string' || typeof arr[i] === 'boolean'){
        document.write(`<li>${arr[i]}</li>`);
        }
        else {
            document.write(`<li>Some error</li>`);
        }
    }
    document.write('</ul>');
}
arrListFoo([5, 'Some text', true, false, []]);
document.write('<hr>');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const arrObj = (arr) => {
    for (const arrElement of arr) {
        document.write('<div>');
        if(typeof arrElement.id === 'number' && typeof arrElement.name === 'string' && typeof arrElement.age === 'number') {
        for (const arrElementKey in arrElement) {

                document.write(`<p>${arrElementKey} - ${arrElement[arrElementKey]}</p>`)
            }

        }
        else {
            document.write(`<p>Some error</p>`)
        }
        document.write('</div>');
    }

}
arrObj([{id: 1, name : "Sasha", age: 20},
    {id: 2, name : "Sveta", age: 30},
    {id: 3, name : "Sergey", age: 35},
    {id: 4, name : true, age: 35}])