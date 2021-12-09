/*
є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.*/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let arrFavorites = [];
for (const user of users) {
    let div = document.createElement('div');
    div.innerText = `name - ${user.name}, age - ${user.age}, status - ${user.status}`;
    let btn = document.createElement('button');
    btn.innerText = "Add to favorites";
    document.body.append(div, btn);
    btn.onclick = function () {
        if (!localStorage.getItem('favorites')) {
            arrFavorites.push(user);
            let firstStringFavorites = JSON.stringify(arrFavorites);
            console.log(firstStringFavorites);
            localStorage.setItem('favorites', firstStringFavorites);
        } else {
            let localFavorites = localStorage.getItem('favorites');
            console.log('localFavorites' + localFavorites + 'user' + JSON.stringify(user));
            if (!localFavorites.includes(JSON.stringify(user))) {
                let arrLocalFavorites = JSON.parse(localFavorites);
                arrLocalFavorites.push(user);
                let newStringLocalStorage = JSON.stringify(arrLocalFavorites);
                localStorage.removeItem('favorites');
                localStorage.setItem('favorites', newStringLocalStorage);
            }
        }
    }
}
