// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let idMain_header = document.getElementById('main_header');
let colors = {
    september_2021: 'green'
}
idMain_header.style.color = colors.september_2021;
//або додає клас  september_2021
idMain_header.classList.add('september_2021');
// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
for (const ulElement of ul) {
    ulElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let classLinkList = document.getElementsByClassName('linkList');
for (const classElement of classLinkList) {
    classElement.style.width = '50%';
}
//або
for (const ulElement of ul) {
    let classLinkList = ulElement.getElementsByClassName('linkList');
    for (const classElement of classLinkList) {
        classElement.style.width = '50%';
    }
}

// d) отримує текст який зберігається в елементі з класом listElement2
let classListElement2 = document.getElementsByClassName('listElement2');
for (const classElement of classListElement2) {
    console.log(classElement.innerText);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.color = 'blue';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
for (const aElement of a) {
    aElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aElement of a) {
    if (aElement.innerText === 'link3') {
        aElement.style.width = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aElement of a) {
    let nameClass = 'element_' + aElement.innerText;
    aElement.classList.add(nameClass);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let classSubHeader = document.getElementsByClassName('sub-header');
let color = prompt('Enter color');
if(color!==''){
    for (const classElement of classSubHeader) {
        classElement.style.color = color;
    }
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color2 = prompt('Enter color for text of class sub-header = content 2 segment');
if(color2!==''){
    for (const classElement of classSubHeader) {
        if(classElement.innerText === 'content 2 segment'){
        classElement.style.color = color2;
        }
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let classContent_1 = document.getElementsByClassName('content_1');
let text = prompt('Enter text for class = content_1');
if(text !==''){
    console.log(text+'sometext');
    for (const classElement of classContent_1) {
        classElement.innerText = text;
    }
}
// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let classText2 = document.getElementsByClassName('text2');
for (const classElement of classText2) {
    classElement.innerText = 'sep-2021';
}
