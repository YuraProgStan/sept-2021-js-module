// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

    // - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let pIdContent = document.getElementById('content');
console.log(pIdContent.innerText);
// -- отримує текст з блоку з id "rules"
let divIdRules = document.getElementById('rules');
console.log(divIdRules.innerText);
//або
let divClassFc = document.getElementsByClassName('fc');
console.log(divClassFc[0].innerText);
// -- замініть текст параграфа з id 'content' на будь-який інший
pIdContent.innerText = 'Change text id = content';
console.log(pIdContent.innerText);
// -- замініть текст параграфа з id 'rules' на будь-який інший
divIdRules.innerText = 'Change text id = rules';
console.log(pIdContent.innerText);
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

let divClassFc_rules = document.getElementsByClassName('fc_rules');
for (const elementClassFcRule of divClassFc_rules) {
    elementClassFcRule.classList.add('bg-red');
    elementClassFcRule.classList.add('col-blue');
}
//або, якщо будь-якому елементу на сторінці
let recElements2 = (startElement, classNameArr) => {
    if(startElement.tagName!=='SCRIPT'){
        for (let classElement of classNameArr ) {
            startElement.classList.toggle(classElement);
        }
    }
    if(startElement.children.length){
        for (const element of startElement.children) {
            return recElements2(element, classNameArr);
        }
    }
}
for (const recElement of document.body.children) {
    recElements2(recElement,['bg-red', 'col-blue']);
}

//або, будь-якому елементу - стиль зразу елементу без додавання классів
let recElements = (startElement, styleChange) => {
    if(startElement.tagName!=='SCRIPT'){
        for (const styleChangeKey in styleChange) {
            startElement.style[styleChangeKey] = styleChange[styleChangeKey];
        }
    }
    if(startElement.children.length){
        for (const element of startElement.children) {
            return recElements(element, styleChange);
        }
    }
}
for (const recElement of document.body.children) {
    recElements(recElement, {backgroundColor:'red', color:'blue'});
}
//aбо
let anyElements = document.body.getElementsByTagName('*');
for (const anyElement of anyElements) {
    anyElement.style.backgroundColor = 'red';
    anyElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classAttributeIdRules = divIdRules.getAttribute('class');
let arrClass = classAttributeIdRules.split(' ');
for (const elemClass of arrClass) {
    console.log(elemClass);
}
//або
let classListIdRules = divIdRules.classList;
for (const elemClass of classListIdRules) {
    console.log(elemClass);
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classFc_rules = document.getElementsByClassName('fc_rules');
for (const elementFc_rules of classFc_rules) {
    elementFc_rules.style.color = 'red';
}
