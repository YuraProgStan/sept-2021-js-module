/*- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/
let validName = (name) => {
    let text = "";
    for(let element of name) {
        if ((element >= 'A' && element <= 'Z') || (element >= 'a' && element <= 'z')){
            text += element;
        }
    }
    let resString = "";
    let first = true;
    for (const element1 of text) {
        if (element1.toUpperCase()===element1 && !first){
            resString+= " " + element1;
        }
        else {
            resString += element1;
            first = false;
        }
    }
    return resString;
}
console.log(validName('Harry..Potter'));
console.log(validName('Ron---Whisley'));
console.log(validName('Hermione__Granger'));
console.log(validName('Hermione...-- []545 Granger---'));
console.log('--------------------');
//або
let validName2 = (name) => {
    const regexp = /[^A-Z,a-z]/g;
    let text = name.replaceAll(regexp, '');
    let resString = "";
    let first = true;
    for (const element of text) {
        if (element.toUpperCase() === element && !first){
            resString += " " + element;
        }
        else {
            resString += element;
            first = false;
        }
    }
    return resString;
}
console.log(validName2('Harry..Potter'));
console.log(validName2('Ron---Whisley'));
console.log(validName2('Hermione__Granger'));
console.log(validName2('Hermione...-- []545 Granger---'));
console.log('--------------------');
//або
let validName3 = (name) => {
    let arr = [];
    let i = 0;
    let regexp1 = /[A-Z]/;
    let regexp2 = /[a-z]/;
    let first = true;
    let resString;
    for (const element of name) {
        if (regexp1.test(element)) {
            if (!first ) {
                i++;
            }
            arr[i] = element;
            first  = true;
        } else if (regexp2.test(element)) {
            arr[i] += element;
            first  = false;
        }
    }
    resString = arr.join(" ");
    return resString;
}
console.log(validName3('Harry..Potter'));
console.log(validName3('Ron---Whisley'));
console.log(validName3('Hermione__Granger'));
console.log(validName3('Hermione...-- []545 Granger__'));
console.log('--------------------');
//або
const validName4  = (name) => {
    let resString= name.split('')
        .map(element => (element >= 'A' && element <= 'Z') || (element >= 'a' && element <= 'z') ? element : ' ')
        .join('').trim();
    while (resString.includes('  ')){
        resString = resString.replace('  ',' ')
    }
    return resString;
}
console.log(validName4('Harry..Potter'));
console.log(validName4('Ron---Whisley'));
console.log(validName4('Hermione__Granger'));
console.log(validName4('Hermione...-- []545 Granger__'));
console.log('============================');
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
       arr[i] = Math.floor(Math.random()*100);
    }
    return arr;
}
let myRandom = random();
console.log(myRandom);
console.log('============================');
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sort = myRandom.sort((a, b) => a - b);
console.log(sort);
console.log('============================');
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filter = myRandom.filter(element => element % 2 === 0);
console.log(filter);
console.log('============================');
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let map = myRandom.map(element => element.toString());
console.log(map);
console.log('============================');
/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]
*/
let sortNums = (direction) => {
    let nums = [11,21,3];
    if (direction === 'ascending'){
        return nums.sort();
    }
    else if(direction === 'descending') {
        return  nums.sort((a, b) => b - a);
    }
}
let sortNums1 = sortNums('ascending');
console.log(sortNums1);
let sortNums2 = sortNums('descending');
console.log(sortNums2);
console.log('============================');
/*- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
// -- відсортувати його за спаданням за monthDuration


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let monthDuration = (arr) => {
    return arr.sort((a, b) => b.monthDuration - a.monthDuration);
}
let sortArr = monthDuration(coursesAndDurationArray);
console.log(sortArr);
console.log('============================');
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = (arr) => {
    return arr.filter(element => element.monthDuration > 5);
}
let filterArray = filterArr(coursesAndDurationArray);
console.log(filterArray);
/*- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3))*/ // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let arr = [];
    let length = str.length/n;
    let startSlice = 0;
    let endSlice = n;
    for (let i = 0; i < length; i++) {
        arr[i] = str.slice(startSlice,endSlice);
        startSlice += n;
        endSlice += n;
    }
    return arr;
}
let arrCutString = cutString('наслаждение',3);
console.log(arrCutString);
document.writeln(arrCutString);