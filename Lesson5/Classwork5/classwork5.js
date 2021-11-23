/*Всі функції повинні бути описані стрілочним типом!!!!*/
    // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const minFoo = (num1, num2, num3) => {
        let min;
        if (num1 <= num2 && num1 <= num3) {
            min = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            min = num2;
        } else min = num3;
        console.log('min = ' + min);
}
minFoo(-10, 20, 8);
console.log('============================');


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const maxFoo = (num1, num2, num3) => {
        let max;
        if (num1 >= num2 && num1 >= num3) {
            max = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            max = num2;
        } else max = num3;
        console.log('max = ' + max);
}
maxFoo(-10, 20, 8);
console.log('============================');
// - створити функцію яка повертає найбільше число з масиву
const maxElementArr = (arr) => {
    let max = arr[0];
    for (const arrElement of arr) {
        if (arrElement > max){
        max = arrElement;
        }
    }
    return max;
}
console.log(maxElementArr([3, -10, 8]));
console.log('============================');
// - створити функцію яка повертає найменьше число з масиву
const minElementArr = (arr) => {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min){
            min = arrElement;
        }
    }
    return min;
}
console.log(minElementArr([3, -10, 8, 20]));
console.log('============================');
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sumElementArr = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sumElementArr([3, -10, 8, 20]));
console.log('============================');
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const arithMeanElementArr = (arr) => {

    return sumElementArr(arr)/arr.length;
}
console.log(arithMeanElementArr([3, -10, 8, 20]));
console.log('============================');
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const numbersMinMax = (...rest) => {
    let min = rest[0];
    let max = rest[0];
    for (const restElement of rest) {
        if (restElement < min){
            min = restElement;
        }
        else if (restElement > max){
            max = restElement;
        }
    }
    console.log('max =', max);
    return min;
}
console.log('min =', numbersMinMax(3, -7, 10, 5, -700));
console.log('============================');
/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/
const randomNumbersArr = () => {
    let arr = [];
    let length = Math.floor(Math.random() * 9) + 2; //random length array from 2 to 10
    for (let i = 0; i < length; i++) {
        arr[i] =  Math.round(Math.random()*100);
    }
    console.log(arr);
}
randomNumbersArr();
console.log('============================');
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
const randomNumbersLimitArr = (limit) => {
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr[i] =  Math.round(Math.random()*100);
    }
    console.log(arr);
}
randomNumbersLimitArr(4);
console.log('============================');
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const reverseArr = (arr) => {
    let rev = [];
    for (let i = 0, j = arr.length-1; i < arr.length; i++, j--) {
        rev[j] = arr[i];
    }
    console.log(rev);
}
reverseArr([5, true, 'value', 9]);
//або
const reverseArr2 = (arr) => {
    let rev = [];
    for (let i = arr.length-1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    console.log(rev);
}
reverseArr2([5, true, 'value', 9]);
//або
const reverseArr3 = (arr) => {
    let rev = [];
    let num = 0;
    for (let i = arr.length-1; i >= 0; i--) {
        rev[num++] = arr[i];
    }
    console.log(rev);
}
reverseArr3([5, true, 'value', 9]);