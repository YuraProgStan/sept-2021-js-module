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

// або
let recClass3 = (elementStart, startArr = []) => {
    let getClassList = elementStart.classList;
    if(getClassList.length){
        for (const classNameElement of getClassList) {
            startArr.push(classNameElement);
        }
    }
    if(elementStart.children.length){
        for (const element of elementStart.children){
            recClass(element, startArr);
        }
    }
    return startArr;
}
let arr3 = recClass3(document.body);
console.log(arr3);