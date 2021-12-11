/*
1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста*/
let divContainer = document.createElement('div');
let arrayComments;
divContainer.classList.add('container');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(array => {
        arrayComments = array;
    });
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(arrayPosts => {
        for (const arrayPost of arrayPosts) {
            let div = document.createElement('div');
            div.classList.add('post');
            for (const key in arrayPost) {
                let divChild = document.createElement('div');
                divChild.innerText = `${key} - ${arrayPost[key]}`;
                div.appendChild(divChild);
            }
            let btn = document.createElement('button');
            btn.innerText = 'Add all comments of the post'
            div.appendChild(btn);
            divContainer.appendChild(div);
            btn.onclick = function () {
                arrayComments.forEach(item => {
                    if (item.postId === arrayPost.id) {
                        let divCom = document.createElement('div');
                        let h2 = document.createElement('h2');
                        let p1 = document.createElement('p');
                        let p2 = p1.cloneNode(true);
                        h2.innerText = item.name;
                        p1.innerText = item.email;
                        p2.innerText = item.body;
                        divCom.append(h2, p1, p2);
                        div.appendChild(divCom);
                    }
                })
            }
        }
    });
document.body.appendChild(divContainer);