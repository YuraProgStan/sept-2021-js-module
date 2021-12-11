/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts*/
let divContainer = document.createElement('div');
divContainer.classList.add('container');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(arrayPosts=> {
        for (const arrayPost of arrayPosts) {
            let div = document.createElement('div');
            div.classList.add('post');
            for (const key in arrayPost) {
                let divChild = document.createElement('div');
                divChild.innerText = `${key} - ${arrayPost[key]}`;
                div.appendChild(divChild);
            }
          divContainer.appendChild(div);
        }
    });

/*
    2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments*/

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(arrayPosts=> {
        let divContainer = document.getElementsByClassName('container')[0];
        for (const arrayPost of arrayPosts) {
            let div = document.createElement('div');
            div.classList.add('comments');
            for (const key in arrayPost) {
                let divChild = document.createElement('div');
                divChild.innerText = `${key} - ${arrayPost[key]}`;
                div.appendChild(divChild);
            }
            divContainer.appendChild(div);
        }
    });
document.body.appendChild(divContainer);