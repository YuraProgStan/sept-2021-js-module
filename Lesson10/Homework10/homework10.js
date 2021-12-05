// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
/*let div = document.createElement('div');
let id = document.createAttribute('id');
id.value = 'text';
div.setAttributeNode(id);
div.innerText = 'some text';
let btn = document.createElement('button');
btn.innerText = 'Click me';
document.body.append(div, btn1);*/
let btn1 = document.getElementsByClassName('btn1')[0];

btn1.onclick = (() => {
    let id = document.getElementById('text');
    id.style.display = 'none';
});
/*let hr = document.createElement('hr');
document.body.append(hr);*/
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

/*let btn2 = document.createElement('button');
btn2.innerText = 'Click me for hide';
document.body.append(btn2);*/
let btn2 = document.getElementsByClassName('btn2')[0];
btn2.onclick = (function () { //стрелочная функция будет ссылаться на window
    this.style.display = 'none';
});
//або
btn2.addEventListener("click", function () {
    this.style.display = 'none';
})
/*document.body.append(hr.cloneNode(true));*/

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
/*let input = document.createElement('input');
let name = document.createAttribute('name');
input.name ='myInput';
let type = document.createAttribute('type');
input.type = 'text';
let value = document.createAttribute('value');
input.value ='Write your age';
let btn3 = document.createElement('button');
btn3.innerText = 'Click for varification';
let form = document.createElement('form');
form.append(input, btn3);
document.body.appendChild(form);*/
let form1 = document.forms[0];
form1.onsubmit = function (e) {
    e.preventDefault();
    if (this.age.value < 18) {
        this.username.value = 'Вам не дозволено дивитись цю сторінку';
        alert('Вам не дозволено дивитись цю сторінку');
    }
};
/*form.user.oninput = function (){
console.log(this.value);
}*/
// - Создайте меню, которое раскрывается/сворачивается при клике
let clickElement = document.getElementsByClassName('click-element')[0];
let hideMenu= document.getElementsByClassName('hide-menu')[0];
clickElement.onclick = () =>{
    hideMenu.classList.toggle('toggle');
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comments = [{title : 'lorem1', body:'lorem ipsum dolo sit ameti dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ameti lorem ipsum dolo sit ametilorem ipsum dolo sit ametilorem ipsum dolo sit ameti'}
]
//     Вывести список комментариев в документ, каждый в своем блоке.
comments.forEach(value =>{
    let divComment = document.createElement('div');
    divComment.classList.add('comment');
    let btn = document.createElement('button');
    divComment.classList.add('btn-comment');
    btn.innerText = 'hide comment';
    divComment.appendChild(btn);
    for (const key in value) {
        let divKey = document.createElement('div');
        let p = document.createElement('p');
        p.innerText =`${key} - ${value[key]}`;
        divKey.appendChild(p);
        divComment.appendChild(divKey);
    }
    document.body.append(divComment);
})
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentsButtons = document.getElementsByClassName('btn-comment');
let p = document.querySelectorAll('.comment div:nth-child(3)');
for (let i = 0; i < commentsButtons.length; i++) {
    commentsButtons[i].onclick = () =>{
        p[i].style.display = 'none';
    }
}