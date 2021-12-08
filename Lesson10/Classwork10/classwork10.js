/*- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*/
let forms = document.forms;
let btn1 = document.getElementById('btn1');

btn1.onclick = () => {
    for (const form of forms) {
        if (form.name === 'first')
            console.log(form.input.value);
    }
}
/*- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/
let btn2 = document.getElementById('btn2');
// let formId2 = document.getElementById('f3');
let form2 = document.forms[2];
console.log(form2);
/*Если кнопка в форме то делаем
form2.onsubmit = function(e){
e.preventDefault();
...
тот же код
 */
btn2.onclick = () => {
    let trNumber = form2.number1.value;
    let tdNumber = form2.number2.value;
    let valuesCells = form2.cellValue.value;
    console.log(trNumber, tdNumber, valuesCells);
    let table = document.createElement('table');
    for (let i = 1; i <= trNumber; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= tdNumber; j++) {
            let td = document.createElement('td');
            td.innerText = valuesCells;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    console.log(table);
    table.classList.add('table-create');
    document.body.appendChild(table);
}


/*- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку*/
let arrBadWords = ['Shit', 'Crap', 'Fuck', 'Fuck around', 'Fuck off', 'Fuck up', 'Fuck with', 'Fuck you', 'Fucked', 'Fucking', 'Fucking ass',
    'Fucking fool', 'Fucking idiot', 'Fucking shit', 'Damn', 'Shit', 'Nigger', 'Whore', 'Slut', 'Bitch', 'Freak', 'Douchebag', 'Gay', 'Faggot', 'Homo', 'Bastard',
    'Asshole', 'Arsehole', 'Jerk', 'Prick', 'Dick', 'Cunt', 'Pussy', 'Loser', 'Sucker', 'Nerd', 'Noob', 'Fool', 'Stupid', 'Dumb', 'Retard', 'Grammar Nazi',
    'Motherfucker', 'Dickhead', 'Beaver', 'Feck', 'Bullshit', 'Bollocks'];

let lowArrBadWords = arrBadWords.map(value => value.toLowerCase());
let form3 = forms[3];
let btn3 = document.getElementById('btn3');
btn3.onclick = () =>{
    let stringWord = form3.input3.value;
    let lowArrValue = stringWord.trim().toLowerCase();
        if(lowArrBadWords.includes(lowArrValue)){
            alert("Don't write bad words");
        }
}
/*
- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку*/
let form4 = forms[4];
let btn4 = document.getElementById('btn4');
// btn4.onclick = () =>{
//     let stringWords = form4.input4.value;
//     let arrValues = stringWords.trim().split(" ");
//     let lowArrValues = arrValues.map(value => value.toLowerCase());
//     lowArrValues.forEach(value => {
//         if(lowArrBadWords.find(item =>item === value)){
//             alert("Don't write bad words");
//         }
//     })
// }
//або
btn4.onclick = () =>{
    let lowArrBadWords = arrBadWords.map(value => value.toLowerCase());
    let stringWords = form4.input4.value;
    let lowStringWords = stringWords.toLowerCase();
    for(const badWord of  lowArrBadWords){
        if (lowStringWords.includes(badWord)){//строка содержит элемент массива
            alert("Don't write bad words");
        }
    }
}