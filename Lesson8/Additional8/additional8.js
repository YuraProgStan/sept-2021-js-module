// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let recClass = (elementStart, startArr = []) => {
    let getAttributeNames = elementStart.getAttribute('class');
    if(getAttributeNames){
        let classNames = getAttributeNames.split(' ');
        for (const classNameElement of classNames) {
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
let arr = recClass(document.body);
console.log(arr);

//або
let recClass2 = (elementStart, startArr = []) => {
    let getClassList = elementStart.classList;
    if(getClassList){
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
let arr2 = recClass2(document.body);
console.log(arr2);