let itemPost = 'Posts';
let objPostdetails = JSON.parse(localStorage.getItem(itemPost))[0];
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

recObj(objPostdetails, divPar);
let idPost = objPostdetails.id;
let divComments = document.createElement('div');
divComments.classList.add('div-comments');
fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
    .then(response => response.json())
    .then(arrayComments => {
        for (const objComments of arrayComments) {
            let div = document.createElement('div');
            div.classList.add('comments');
            for (const key in objComments) {
                let divItem = document.createElement('div');
                divItem.innerText = `${key}: ${objComments[key]}`;
                div.appendChild(divItem);
            }
            divComments.appendChild(div);
        }
    })
divPar.appendChild(divComments);
document.body.appendChild(divPar);