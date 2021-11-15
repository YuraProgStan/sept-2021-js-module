// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2,17,13,6,22,31,45,66,100,-18];
//     1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    i++;
}
//     2. перебрати його циклом for
for (let j = 0; j < array.length; j++) {

}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < array.length) {
    if (k%2 !==0 ){
        console.log(array[k])
    }
    k++;
}
console.log('========================================');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < array.length; j++) {
    if (j%2 !==0 ){
        console.log(array[j])
    }
}
console.log('========================================');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
k = 0;
while (k < array.length) {
    if (k%2 === 0 ){
        console.log(array[k])
    }
    k++;
}
console.log('========================================');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < array.length; j++) {
    if (j%2 === 0 ){
        console.log(array[j])
    }
}
console.log('========================================');
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < array.length; j++) {
    if (j%3 === 0 ){
       array[j] = "okten";
    }
}
console.log(array);
console.log('========================================');
// 8. вивести масив в зворотньому порядку.
for (let j = array.length-1; j >= 0; j--) {
    console.log(array[j])
}
console.log('----------------------------------------');
//aбо
arrayReverse = [];
let num = 0;
for (let j = array.length-1; j >= 0; j--) {
    arrayReverse[num] = array[j];
    num++;
}
console.log(arrayReverse);
console.log('========================================');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
array = [2,17,13,6,22,31,45,66,100,-18];
{
    let i = array.length - 1;
    while (i >= 0) {
        i--;
    }
    for (let j = array.length-1; j >= 0; j--) {

    }
    let k = array.length - 1;
    while (k >= 0) {
        if (k%2 !==0 ){
            console.log(array[k])
        }
        k--;
    }
    console.log('========================================');
    for (let j = array.length-1; j >= 0; j--) {
        if (j%2 !==0 ){
            console.log(array[j])
        }
    }
    console.log('========================================');
    k = array.length - 1;
    while (k >= 0) {
        if (k%2 === 0 ){
            console.log(array[k])
        }
        k--;
    }
    console.log('========================================');
    for (let j = array.length-1; j >= 0; j--) {
        if (j%2 === 0 ){
            console.log(array[j])
        }
    }
    console.log('========================================');
    for (let j = array.length-1; j >= 0; j--) {
        if (j%3 === 0 ){
            array[j] = "okten";
        }

    }
    console.log(array)
}