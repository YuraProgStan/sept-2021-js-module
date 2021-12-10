/*- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
    При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
    Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина*/
document.addEventListener("click", function (event) {
    let target = event.target;
    console.log(`tag - ${target.tagName}, class - ${target.classList}, id - ${target.id}, width*height - ${target.offsetWidth} * ${target.offsetHeight} `);
});


/*- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
    При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
    Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина*/
document.addEventListener("click", function (event) {
    let popUp = document.getElementsByClassName('pop-up')[0];
    let target = event.target;
    let p1 = document.createElement('p');
    let p2 = p1.cloneNode(true);
    let p3 = p1.cloneNode(true);
    let p4 = p1.cloneNode(true);
    p1.innerText = `tag - ${target.tagName}`;
    p2.innerText = `class - ${target.classList}`;
    p3.innerText = `id - ${target.id}`;
    p4.innerText = `width*height - ${target.offsetWidth} * ${target.offsetHeight}`;
    popUp.append(p1, p2, p3, p4);
    popUp.classList.add('add-pop-up');
});


/*-- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
- Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
2й - оставляет старше 29 лет включительно
3й - оставляет тех у кого город киев
Данные выводить в документ*/
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let f1 = document.forms.f1;
/*let btn = document.getElementById('btn');
btn.onclick = function (e){}*/

f1.onsubmit = function (e) {
    e.preventDefault();
    let status = this.status.checked;
    let age = this.age.checked;
    let city = this.city.checked;
    console.log(usersWithAddress.filter(value =>
        status && !age && !city && !value.status
        || !status && age && !city && value.age >= 29
        || !status && !age && city && value.address.city === 'Kyiv'
        || status && age && !city && !value.status && value.age >= 29
        || !status && age && city && value.age >= 29 && value.address.city === 'Kyiv'
        || status && !age && city && !value.status && value.address.city === 'Kyiv'
        || status && age && city && !value.status && value.age >= 29 && value.address.city === 'Kyiv')
    )
}

/******(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
 при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
 НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
 Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне*/
/*const getChildren = (element) => {
    const childElements = [...element.children];
    if (childElements.length > 0) {
        childElements.map(elem => {
            console.log(elem.tagName);
            if (elem.children) {
                getChildren(elem);
            }
        })
    }
}*/
let foo = function (element) {
    let btnForward = document.createElement('button');
    btnForward.classList.add('forward');
    btnForward.innerText = 'Forward';
    let btnBackward = document.createElement('button');
    btnBackward.classList.add('backward');
    btnBackward.innerText = 'Backward';
    document.body.append(btnForward, btnBackward);
    let divContainer = document.createElement('div');
    divContainer.classList.add('main');
    divContainer.innerText = '1';
    document.body.appendChild(divContainer);
    let path;

    function domStructure(el, divFunc, path, arr = [[0, '1']]) {

        function newIncr() {
            let str = arr[arr.length - 1][1];
            return str + '.' + 1;
        }

        function incr(str) {
            let increment = +str.slice(-1) + 1;
            return (str.slice(0, -1) + increment);
        }

        function foo(arrF, pathF) {
            let arrRev = arrF.slice().reverse();

            for (let el of arrRev) {
                if (el.includes(pathF)) {
                    return el[1];
                }
            }

        }

        let div = document.createElement('div');
        let prev;
        let value;
        if (path <= arr.slice().reverse()[0][0] && foo(arr, path)) {
            prev = foo(arr, path);
            value = incr(prev);
        } else {
            value = newIncr();
        }
        arr.push([path, value]);
        div.innerText = value;
        divFunc.appendChild(div);
        if (el.firstElementChild) {
            path++;
            domStructure(el.firstElementChild, div, path, arr);
        } else if (el.nextElementSibling) {
            domStructure(el.nextElementSibling, div.parentElement, path, arr);
        } else if (el.parentElement.nextElementSibling) {
            path--;
            domStructure(el.parentElement.nextElementSibling, div.parentElement.parentElement, path, arr);
        }
    }

    domStructure(element.children[0], divContainer, 1);

    function recGetChildren() {
        let i = 0;
        btnForward.addEventListener('click', funcNextRec);
        btnBackward.addEventListener('click', funcPrevRec);
        document.getElementsByClassName('active-rec')[0].classList.remove('active-rec');

        function funcNextRec() {
            let length = document.getElementsByClassName('main')[0].getElementsByTagName('div').length - 1;
            console.log('nextStep2');
            updatePostionRec(i);
            i++;
        }

        function updatePostionRec() {
            if (i === 0) {
                console.log('nextStep3');
                  document.getElementsByClassName('main')[0].firstElementChild.classList.add('active-rec');

            } else {
                let prevActive = document.getElementsByClassName('active-rec')[0];
                if (prevActive.firstElementChild) {
                    let nextPrev = prevActive.firstElementChild;
                    nextPrev.classList.add('active-rec');
                    prevActive.classList.remove('active-rec');
                } else if (prevActive.nextElementSibling) {
                    let nextPrev = prevActive.nextElementSibling;
                    nextPrev.classList.add('active-rec');
                    prevActive.classList.remove('active-rec');
                } else if (prevActive.parentElement.nextElementSibling) {
                    let nextPrev = prevActive.parentElement.nextElementSibling;
                    nextPrev.classList.add('active-rec');
                    prevActive.classList.remove('active-rec');
                }
            }
        }

        function funcPrevRec() {
            updatePostionPrevRec(i);
            if (i === 0) {

            } else {
                i--;
            }
        }

        function updatePostionPrevRec() {

            let prevActive = document.getElementsByClassName('active-rec')[0];
            if (prevActive === document.getElementsByClassName('main')[0].firstElementChild) {
                let find = document.getElementsByClassName('main')[0].lastElementChild;
                if(find.firstElementChild) {
                    let nextPrev = find.lastElementChild;
                    nextPrev.classList.add('active-rec');
                    prevActive.classList.remove('active-rec');
                }
                else {
                    let nextPrev = document.getElementsByClassName('main')[0].lastElementChild;
                    nextPrev.classList.add('active-rec');
                    prevActive.classList.remove('active-rec');
                }
            }
           else if (prevActive.previousElementSibling) {
                let currentFindElem = prevActive.previousElementSibling;
                if (!currentFindElem.firstElementChild) {
                    let nextPrev = prevActive.previousElementSibling;
                    nextPrev.classList.add('active-rec');
                    prevActive.classList.remove('active-rec');
                } else {
                    let nextPrev = currentFindElem.lastElementChild;
                    nextPrev.classList.add('active-rec');
                    prevActive.classList.remove('active-rec');
                }
            } else if (prevActive.parentElement) {
                let nextPrev = prevActive.parentElement;
                nextPrev.classList.add('active-rec');
                prevActive.classList.remove('active-rec');
            }
        }

        // function func() {
        //     btnForward.removeEventListener('click', func);
        //     if (element.children.length > 0) {
        //         console.log('test1', element.children[0]);
        //         recGetChildren(element.children[0]);
        //     } else if (element.nextElementSibling) {
        //         console.log('test2', element.nextElementSibling);
        //         recGetChildren(element.nextElementSibling);
        //     } else if (!element.parentElement.classList.contains('container') && element.parentElement.nextElementSibling) {
        //         console.log('test3', element.parentElement.nextElementSibling);
        //         recGetChildren(element.parentElement.nextElementSibling);
        //     } else if (element.parentElement.classList.contains('container')) {
        //         console.log("thats all");
        //     }
        // }

    }

    recGetChildren();
}
let element = document.getElementsByClassName('container')[0];
foo(element);

/*- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.*/
let arrImagesUrl = ['electro.jpg', 'germany.jpg', 'porshe.jpg', 'tesla-roadster.jpg', 'tokio.jpg'];
let lenghth = arrImagesUrl.length - 1;
let imageBlock = document.getElementsByClassName('img-block')[0];
let arrowLeft = document.getElementsByClassName('arrow-left')[0];
let arrowRight = document.getElementsByClassName('arrow-right')[0];
let boolets = document.getElementsByClassName('boolets')[0];
let boolet = document.createElement('div');
boolet.classList.add('boolet');
for (let j = 0; j <= lenghth; j++) {
    boolets.appendChild(boolet.cloneNode(false));
}
let booletActive = document.getElementsByClassName('boolet')[0];
booletActive.classList.add('boolet-active');
let booletArr = document.getElementsByClassName('boolet');

imageBlock.style.backgroundImage = "url('./images/" + arrImagesUrl[0] + "')";
// imageBlock.style.transition = "3s"
let i = 0;
arrowRight.addEventListener('click', funcNext);

function funcNext() {
    if (i === lenghth) {
        i = 0;
        updatePostion(i);
    } else {
        i++;
        updatePostion(i);
    }
}

arrowLeft.addEventListener('click', funcPrev);

function funcPrev() {
    if (i === 0) {
        i = lenghth;
        updatePostion(i);
    } else {
        i--;
        updatePostion(i);
    }
}

let updatePostion = function (i) {
    for (const element of booletArr) {
        if (element.classList.contains('boolet-active')) {
            element.classList.remove('boolet-active');
        }
    }
    imageBlock.style.backgroundImage = "url('./images/" + arrImagesUrl[i] + "')";
    booletArr[i].classList.add('boolet-active');
}

/*    Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан*/
let span = document.createElement('span');
span.style.fontStyle = 'italic';
span.style.fontWeight = '700';

function selection(elem) {
    if (window.getSelection) {
        let sel = window.getSelection();
        if (sel.rangeCount) {
            let range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(elem);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

let buttonSelect = document.getElementById('select');
buttonSelect.addEventListener('click', function () {
    selection(span);
})
/*
document.addEventListener("mouseup", function (){
    selection(span);
});*/
