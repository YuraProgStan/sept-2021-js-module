// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function arreaRectangle(a, b) {
    if (a > 0 && b > 0) {
        return a * b;
    } else {
        return 'Enter  two positive numbers of the sides of the rectangle';
    }
}

let arreaRec = arreaRectangle(5, 7);
console.log(arreaRec);
console.log('============================');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function arreaCircle(r) {
    if (r > 0) {
        let s = Math.PI * Math.pow(r, 2);
        return s.toFixed(2);
    } else {
        return 'Enter a positive number for the radius of the circle'
    }
}

let arreaCirc = arreaCircle(5);
console.log(arreaCirc);
console.log('============================');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function arreaCylinder(r, h) {
    if (r > 0 && h >0) {
        let sLateralSurface = 2 * Math.PI * r * h;
        let sTotalSurface = 2 * Math.PI * r * (h + r);
        return [sLateralSurface.toFixed(2), sTotalSurface.toFixed(2)];
    } else {
        return 'Enter two positive numbers for the height and radius of the cylinder'
    }
}

let arreaCyl = arreaCylinder(5, 9);
let sLateralSurfaceCyl = arreaCyl[0];
let sTotalSurfaceCyl = arreaCyl[1];
console.log('sLateralSurfaceCyl = ' + sLateralSurfaceCyl);
console.log('sTotalSurfaceCyl = ' + sTotalSurfaceCyl);

console.log('============================');
// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayFunc (array) {
    for (let arrayElement of array) {
        console.log(arrayElement)
    }
}
let someArray = [5, 'dgdsfg', true];
arrayFunc(someArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphFunc(text) {
    if (text){
    document.write(`<p>${text}</p>`)
    }
}
let text = 'Some text';
paragraphFunc(text);
document.write('<hr>');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLiFunc(text){
    if(text) {
        document.write('<ul>');
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write('</ul>');
    }
}
let textLi = "Some li text";
ulLiFunc(textLi);
document.write('<hr>');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function  ulLiWithNumberLi(text, numberLi){
    if(text && numberLi && typeof numberLi === 'number'){
        document.write('<ul>');
        for (let i = 1; i <= numberLi; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write('</ul>');
    }
}
let textLi2 = "Some li text";
let numberLi = 5;
ulLiWithNumberLi(textLi2,numberLi);
document.write('<hr>');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primitiveElements(array){
    if(array){
        document.write('<ul>');
        for (let arrayElement of array) {
            if(typeof arrayElement === 'number'
                || typeof arrayElement === 'string'
                || typeof arrayElement === 'boolean'){
                    document.write(`<li>${arrayElement}</li>`);
                }
            }
        }
        document.write('</ul>');
}
let arrayPrimitiveElements = [5,'text', true];
primitiveElements(arrayPrimitiveElements);

//або
/*let numbers = [2, 3,4];
numbers.map(e => document.write(`${e}`));*/
function primitiveElements2(array){
    if(array){
        document.write('<ul>');
      array.filter(e =>typeof e === 'number'|| typeof e === 'string'|| typeof e === 'boolean')
          .map(e => document.write(`<li>${e}</li>`));
    document.write('</ul>');
    }

}
let arrayPrimitiveElements2 = [7,'text', true];
primitiveElements2(arrayPrimitiveElements2);
document.write('<hr>');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayObjects(aray){
    if (aray){
        for (const arayElement of aray) {
           if(typeof arayElement.id === 'number' && typeof arayElement.name === 'string' && typeof arayElement.age === 'number'){
               document.write(`<div>
            <h2>Name - ${arayElement.name}</h2>
            <p>index - ${arayElement.id}</p>
            <p>age - ${arayElement.age}</p>

            </div>`)
           }
        }
    }
}
let arrayObj = [
    {id: 1, name:'Vasya', age: 20},
    {id: 2, name:'Sveta', age: 25},
    {id: 3, name:'Maxim', age: 30} ];

arrayObjects(arrayObj);