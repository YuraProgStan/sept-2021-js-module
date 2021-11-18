// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minFunc(num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        let min;
        if (num1 <= num2 && num1 <= num3) {
            min = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            min = num2;
        } else min = num3;
        console.log('min = ' + min);
    }
}

minFunc(-1, 2, 2);

//або
function minFunc2(num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        let min;
        switch (true) {
            case num1 <= num2 && num1 <= num3:
                min = num1;
                break;
            case num2 <= num1 && num2 <= num3:
                min = num2;
                break;
            default:
                min = num3;
        }
        console.log('min = ' + min);
    }
}

minFunc2(5, -99, 2);
console.log('============================');

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxFunc(num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        let max;
        if (num1 >= num2 && num1 >= num3) {
            max = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            max = num2;
        } else min = num3;
        console.log('max = ' + max);
    }
}

maxFunc(-1, 2, 2);

//або
function maxFunc2(num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        let max;
        switch (true) {
            case num1 >= num2 && num1 >= num3:
                max = num1;
                break;
            case num2 >= num1 && num2 >= num3:
                max = num2;
                break;
            default:
                max = num3;
        }
        console.log('max = ' + max);
    }
}

maxFunc2(5, -99, 2);
console.log('============================');

// - створити функцію яка повертає найбільше число з масиву
function maxArray(array) {
    if (array && Array.isArray(array)) {
        let num = 0;
        let numbers = [];
        for (let arrayElement of array) {
            if (typeof arrayElement === 'number') {
                numbers[num] = arrayElement;
                num++;
            }
        }
        if (numbers.length !== 0) {
            let max = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] >= max) {
                    max = numbers[i];
                }
            }
            return max;
        } else {
            return 'No one of the array elements is a number';
        }
    }
    else {
        return 'error enter array';
    }
}

console.log(maxArray([true, 'value', 20, 40, 50]));
console.log(maxArray(['text']));
console.log(maxArray('test error enter'));
console.log('============================');

// - створити функцію яка повертає найменьше число з масиву
function numbersArray(array) {
    let num = 0;
    let numbers = [];
    for (let arrayElement of array) {
        if (typeof arrayElement === 'number') {
            numbers[num] = arrayElement;
            num++;
        }
    }
    return numbers;
}

function minArray(array) {
    if (array && Array.isArray(array)) {
        let numbers = numbersArray(array);
        if (numbers.length !== 0) {
            let min = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] <= min) {
                    min = numbers[i];
                }
            }
            return min;
        } else {
            return 'No one of the array elements is a number';
        }
    }
    else {
        return 'error enter array';
    }
}

console.log(minArray([true, 'value', 20, 40, 50]));
console.log(minArray(['text', false]));
console.log(minArray('test error enter'));
console.log('============================');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArray(array) {
    if (array && Array.isArray(array)) {
        let numbers = numbersArray(array);
        if (numbers.length !== 0) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        } else {
            return 'No one of the array elements is a number';
        }
    }
    else {
        return 'error enter array';
    }
}

console.log(sumArray([true, 'value', 20, 40, 50]));
console.log(sumArray(['text', false]));
console.log(minArray('test error enter'));

//або тільки для точно заданого массива чисел
function onlyNumbersArray(array) {
    if (array &&  Array.isArray(array) && array.length !== 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    else {
        return 'error enter array';
    }
}

console.log(onlyNumbersArray([1, 2, 10]));
console.log('============================');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithMeanArray(array) {
    if (array &&  Array.isArray(array) && array.length !== 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return (sum / array.length).toFixed(2);
    } else {
        return 'error enter array';
    }
}

console.log('arithmetic mean = ' + arithMeanArray([10, 25, 7]));
console.log('============================');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function specialNumbers() {
    if (arguments) {
        let min = arguments[0];
        let max = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i];
            } else if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        console.log('max = ' + max);
        return min;
    }
}

let min = specialNumbers(5, 20, -5, 5, 1000, -90, 7);
console.log('min = ' + min);
console.log('============================');

/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/

function randomNumbersArray() {
    let array = [];
    let lengthArray = Math.floor(Math.random() * 10) + 1; //random length array from 1 to 10
    for (let i = 0; i < lengthArray; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    console.log(array);

}

randomNumbersArray();
console.log('============================');

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomNumbersLimitArray(limit = 1) {
    let array = [];
    for (let i = 0; i < limit; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    console.log(array);

}

randomNumbersLimitArray(5);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverseArray(array) {
    if (array) {
        let reverseArray = [];
        let reverseArrayIndex = 0;
        for (let i = array.length - 1; i >= 0; i--) {
            reverseArray[reverseArrayIndex] = array[i];
            reverseArrayIndex++;
        }
        return reverseArray;
    }
    else {
        return 'error enter array';
    }
}

console.log(reverseArray([5, 7, true, 'okten']));