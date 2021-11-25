/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
console.log('--------------------');
//або
let stringLength = (text) => {
    console.log(text.length);
}
stringLength('hello world');
stringLength('lorem ipsum');
stringLength('javascript is cool');
console.log('--------------------');
//або
let array = ['hello world', 'lorem ipsum', 'javascript is cool'];
let arrStringLength = (arr) => {
    arr.forEach(element => {
        console.log(element.length);
    })
}
arrStringLength(array);
console.log('============================');
/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

//або
let upperCase = text => text.toUpperCase();
console.log(upperCase('hello world'));
console.log(upperCase('lorem ipsum'));
console.log(upperCase('javascript is cool'));

console.log('============================');
/*- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
console.log('--------------------')
//або
let lowerCase = text => text.toLowerCase();
console.log(lowerCase('HELLO WORLD'));
console.log(lowerCase('LOREM IPSUM'));
console.log(lowerCase('JAVASCRIPT IS COOL'));

console.log('============================');

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/
let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);
console.log('============================');

/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/
let str2 = 'Каждый охотник желает знать';
let stringToarray = (str) => {
    return str.split(' ');
}
let arr = stringToarray(str2);
console.log(arr);
document.writeln(arr);  //document.writeln тоже самое, что document.write но добавляет знак новой строки, что-то не срабатывает переход на новую строку.
document.write('<hr>');
console.log('============================');
/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/
let delete_characters = (str, length) => {
    return str.substring(0, length);
}
document.writeln(delete_characters(str2, 7));
document.write('<hr>');

/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/
let str3 = "HTML JavaScript PHP";
let insert_dash = (str) => {
    return str.replaceAll(' ', '-').toUpperCase();
}
document.writeln(insert_dash(str3));
document.write('<hr>');
/*- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.*/

let str4 = 'some text';
let capString = (str) => {
    if (!str) {
        return str;
    } else {
        let first = str.charAt(0).toUpperCase();
        let withoutFirst = str.substring(1);
        return first.concat(withoutFirst);
    }
}
document.write(capString(str4));
document.write('<br>');

//або
let capString2 = (str) => {
    if (!str) {
        return str;
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
document.write(capString2(str4));
document.write('<hr>');


/*- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.*/
/*   const start = performance.now();
    ...code
    const end = performance.now();
      console.log('Время выполнения = ', end-start); //мкс (10*-6 с)*/
let str5 = 'lorem ipsum dolor sit amet';
const start = performance.now();
let capitalize = (str) => {
    if (!str) {
        return str;
    } else {
        let arr = str.split(' ');
        return arr.map(element => capString2(element)).join(' ');
    }
}
document.write(capitalize(str5));
const end = performance.now();
console.log('Execution time = ', end-start);
document.write('<br>');

//або
const start2 = performance.now()
let capitalize2 = (str) => {
    if (!str) {
        return str;
    } else {
        let arr = str.split(' ');
        let stringResult = "";
        for (let element of arr) {
            stringResult += capString2(element) + " ";
        }
        return stringResult;
    }
}
document.write(capitalize2(str5));
const end2 = performance.now();
console.log('Execution time = ', end2-start2);