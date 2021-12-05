// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');


//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'red';
div.style.color = 'blue';
div.style.fontSize = '16px';

// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array = ['Main','Products','About us','Contacts'];
let menu = document.getElementsByClassName('menu');
for (const element of array) {
    let li = document.createElement('li');
    li.innerText = element;
    menu[0].appendChild(li);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
   div.innerText = element.title + " - " + element.monthDuration;

    document.body.appendChild(div);
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    div.classList.add('item');
    h2.classList.add('heading');
    p.classList.add('description');
    h2.innerText = element.title;
    p.innerText = element.monthDuration;
    div.appendChild(h2);
    div.appendChild(p);
    document.body.appendChild(div);
}