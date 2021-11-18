// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function returnSumDifferent() {
    if (arguments) {
        switch (true) {
            case arguments.length === 1 :
                console.log(arguments[0]);
                break;
            case arguments.length === 2 && (typeof arguments[0] === 'string' || typeof arguments[0] === 'number') && (typeof arguments[1] === 'string' || typeof arguments[1] === 'number'):
                return arguments[0] + arguments[1];
            case arguments.length === 2:
                return 'error enter type of arguments';
            default:
                return 'error enter numbers of arguments';

        }
    }
}

returnSumDifferent(5);
console.log(returnSumDifferent(5, 7));
console.log(returnSumDifferent('value1', 'value2'));
console.log(returnSumDifferent(7, 9, 20));
console.log(returnSumDifferent(true, false));
console.log('----------------------------');
//або
function returnSumDifferentSimple(a, b) {
    if (arguments.length > 0 && arguments.length <= 2) {
        if (a && b === undefined) {
            console.log(a);
        } else if (a && b
            && (typeof arguments[0] === 'string' || typeof arguments[0] === 'number')
            && (typeof arguments[1] === 'string' || typeof arguments[1] === 'number')
        ) {
            return a + b;
        } else {
            return 'error enter type of arguments';
        }
    } else {
        return 'error enter numbers of arguments';
    }
}

returnSumDifferentSimple(5);
console.log(returnSumDifferentSimple(5, 7));
console.log(returnSumDifferentSimple('value1', 'value2'));
console.log(returnSumDifferentSimple(7, 9, 20));
console.log(returnSumDifferentSimple(true, false));
console.log('============================');

/*
- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]
*/
function sumTwoArrays(array1, array2) {
    if (array1 !== undefined && array2 !== undefined && array1.length === array2.length) {
        sumArray = [];
        for (let i = 0; i < array1.length; i++) {
            sumArray[i] = array1[i] + array2[i];
        }
        return sumArray;
    }
}

console.log(sumTwoArrays([1, -5, 9, 20], [2, 2, 11, 20]));
console.log('============================');
/*- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/
function keyObjects(arrayObjects) {
    if (arrayObjects &&  Array.isArray(arrayObjects) && arrayObjects.length !== 0) {
        let returnArray = [];
        let returnArrayIndex = 0;
        for (let object of arrayObjects) {
            if (object != null && !Array.isArray(object) && typeof object === 'object') {
                for (const objectKey in object) {
                    returnArray[returnArrayIndex] = objectKey;
                    returnArrayIndex++;
                }

            } else {
                return "Some error1";
            }

        }
        return returnArray;
    } else {
        return "Some error2";
    }

}

let keysArray = keyObjects([{name: 'Dima', age: 13}, {model: 'Camry'},{country: "Ukraine", city:'Kiev', devSkils: 'JS and React'}]);
console.log(keysArray);
console.log('============================');
/*
    - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/
function valueObjects(arrayObjects) {
    if (arrayObjects &&  Array.isArray(arrayObjects) && arrayObjects.length !== 0) {
        let returnValueArray = [];
        let returnArrayIndex = 0;
        for (let object of arrayObjects) {
            if (object != null && !Array.isArray(object) && typeof object === 'object') {
                for (const objectKey in object) {
                    returnValueArray[returnArrayIndex] = object[objectKey];
                    returnArrayIndex++;
                }

            } else {
                return "Some error1";
            }

        }
        return returnValueArray;
    } else {
        return "Some error2";
    }

}

let valuesArray = valueObjects([{name: 'Dima', age: 13}, {model: 'Camry'},{country: "Ukraine", city:'Kiev', devSkils: 'JS and React'}]);
console.log(valuesArray );