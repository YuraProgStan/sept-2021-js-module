// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let recClass = (elementStart, startArr = []) => {
    let getAttributeNames = elementStart.getAttribute('class');
    if (getAttributeNames) {
        let classNames = getAttributeNames.split(' ');
        for (const classNameElement of classNames) {
            startArr.push(classNameElement);
        }
    }
    if (elementStart.children.length) {
        for (const element of elementStart.children) {
            recClass(element, startArr);
        }
    }
    return startArr;
}
let arr = recClass(document.body);
console.log(arr);

//unique array function
let unique = (arr) => {
    return Array.from(new Set(arr));
}

//або
let arrSave = function () {
    let _x = [];
    let arrWorker = {
        set: function (x) {
            for (const x1 of x) {
                let value = _x
                _x = value.concat(x1);
            }
        },
        get: function () {
            return _x;
        }
    }
    return arrWorker;
}

let recClass2 = (elementStart) => {
    let getClassList = elementStart.classList;
    if (getClassList.length) {
        arrSaveF.set(getClassList);
    }
    if (elementStart.children.length) {
        for (const element of elementStart.children) {
            recClass2(element);
        }
    }
}
let arrSaveF = arrSave();
recClass2(document.body);
console.log(arrSaveF.get());
console.log(unique(arrSaveF.get()));

// або
let recClass3 = (elementStart, startArr = []) => {
    let getClassList = elementStart.classList;
    if (getClassList.length) {
        for (const classNameElement of getClassList) {
            startArr.push(classNameElement);
        }
    }
    if (elementStart.children.length) {
        for (const element of elementStart.children) {
            recClass(element, startArr);
        }
    }
    return startArr;
}
let arr3 = recClass3(document.body);
console.log(arr3);

// або без рекурсии
let recClass4 = (elementStart) => {
    let arr = [];
    let allTags = elementStart.getElementsByTagName('*');
    for (const allTag of allTags) {
        let getClassList = allTag.classList;
        if (getClassList.length) {
            for (const classListElement of getClassList) {
                arr.push(classListElement);
            }
        }
    }

    return arr;
}
let arr4 = recClass4(document.body);
console.log(arr4);

// або
let recClass5 = (elementStart) => {
    let arr = [];
    let rez;
    for (let element of elementStart.children) {
        if (element.tagName !== 'SCRIPT') {
            if (element.classList.length) {
                for (const classListElement of element.classList) {
                    arr.push(classListElement);
                    rez = arr;
                }
            }
            recClass5(element);
        }
    }
    if (rez) {
        console.log(rez)
    }
}
recClass5(document.body);

//або
let funcArr = () => {
    let arr = [];
    return function work(elem) {
        if (elem === 'get') {
            return arr;
        }
        if (elem.classList.length) {
            for (const arrElement of elem.classList) {
                arr.push(arrElement);
            }
            return arr;
        } else {
            return [];
        }
    }
}
let recClass6 = (elementStart) => {
    let rez;
    if (elementStart.children.length) {
        rez = closure(elementStart);
        for (const element of elementStart.children) {
            if (element.tagName !== 'SCRIPT') {
                rez.concat(recClass6(element));
            }
        }
    }
}
let closure = funcArr();
recClass6(document.body);
console.log(closure('get'));
//або

let recClass7 = (elementStart) => {
    function work(elem) {
        if (elem.classList.length) {
            let arr = [];
            for (const arrElement of elem.classList) {
                arr.push(arrElement);
            }
            return arr;
        } else {
            return [];
        }
    }
    let rez;
    if (elementStart.children.length) {
        rez = work(elementStart);
        for (let element of elementStart.children) {
            if (element.tagName !== 'SCRIPT') {
               rez = rez.concat(recClass7(element));
            }
        }
        return rez;
    }
    else return [];
}
let arr7 = recClass7(document.body);
console.log(arr7);
