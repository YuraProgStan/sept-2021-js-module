/*
1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/users
    кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
    Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста*/
let divContainer = document.createElement('div');
divContainer.classList.add('container');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(arrayUsers=> {
        for (const arrayUser of arrayUsers) {
            let div = document.createElement('div');
            div.classList.add('user');
            for (const key in arrayUser) {
                let divChild = document.createElement('div');
              function rec(valueObj, keyObj,  divChildren, divParent){
                  if(typeof valueObj === 'object'){
                      divChildren.innerText =`${keyObj}`;
                      for (const argumentsKey in valueObj) {
                          debugger;
                          let divRecChild = document.createElement('div');
                          divChildren.appendChild(divRecChild);
                          if(typeof valueObj[argumentsKey] ==='object' ){
                              console.log(divRecChild);
                            rec(valueObj[argumentsKey],argumentsKey,divRecChild, divChildren);
                          }
                          else {
                              divRecChild.innerText = `${argumentsKey}: ${valueObj[argumentsKey]}`;
                          }
                      }
                  }
                  else {
                      divChildren.innerText = `${key}: ${arrayUser[key]}`;
                  }
                  divParent.appendChild(divChildren);
              }
              rec(arrayUser[key], key, divChild, div);
            }
            let btn = document.createElement('button');
            btn.innerText = "Add posts of user";
            div.appendChild(btn);
            divContainer.appendChild(div);

            btn.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${arrayUser.id}`)
                    .then(response => response.json())
                    .then(arrayPosts=> {
                        for (const arrayPost of arrayPosts){
                            let divPost = document.createElement('div');
                            let h2 = document.createElement('h2');
                            let p = document.createElement('p');
                            let btn2 = document.createElement('button');
                            btn2.innerText = "Add comments of post";
                            h2.innerText = arrayPost.title;
                            p.innerText = arrayPost.body;
                            divPost.append(h2,p,btn2);
                            div.appendChild(divPost);
                            btn2.onclick = function (){
                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${arrayPost.id}`)
                                    .then(response => response.json())
                                    .then(arrayComments=> {
                                        for (const arrayComment of arrayComments) {
                                            let divCom = document.createElement('div');
                                            let h2 = document.createElement('h2');
                                            let p1 = document.createElement('p');
                                            let p2 = p1.cloneNode(true);
                                            h2.innerText = arrayComment.name;
                                            p1.innerText = arrayComment.email;
                                            p2.innerText = arrayComment.body;
                                            divCom.append(h2, p1, p2);
                                            divPost.appendChild(divCom);
                                        }
                                    })
                            }

                        }

                    })


            }
        }
    });
document.body.appendChild(divContainer);