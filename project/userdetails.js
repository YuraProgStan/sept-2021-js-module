let item = 'Users';
let objUserdetails = JSON.parse(localStorage.getItem(item))[0];
let divPar = document.createElement('div');
divPar.classList.add('container');

function recObj(obj, divParent) {
    for (const key in obj) {
        let divChildren = document.createElement('div');
        if (typeof obj[key] === 'object') {
            divChildren.innerText = `${key}`;
            recObj(obj[key], divChildren);
        } else {
            divChildren.innerText = `${key}: ${obj[key]}`;
        }
        divParent.appendChild(divChildren);
    }
}

recObj(objUserdetails, divPar);
let divBtn = document.createElement('div');
divBtn.classList.add('div-btn');
let btn = document.createElement('button');
btn.innerText = 'post of current user';
let divPostTitles = document.createElement('div');
divPostTitles.classList.add('div-post-titles');
let itemPost = 'Posts';
btn.addEventListener('click', function () {
    let idUser = objUserdetails.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
        .then(response => response.json())
        .then(arrayPosts => {
            for (const objPost of arrayPosts) {
                let div = document.createElement('div');
                let a = document.createElement('a');
                a.href = 'post-details.html';
                a.innerText = 'post details';
                div.classList.add('user-post');
                div.innerText = objPost.title;
                div.appendChild(a);
                divPostTitles.appendChild(div);
                a.addEventListener('click', function () {
                    let savePost = (object) => {
                        let newUser = localStorage.removeItem(itemPost) || [];
                        newUser.push(object);
                        localStorage.setItem(itemPost, JSON.stringify(newUser))
                    }
                    savePost(objPost);
                })

            }
        })

})
divBtn.appendChild(btn);
divPar.append(divBtn, divPostTitles);
document.body.appendChild(divPar);
