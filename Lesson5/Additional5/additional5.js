// - Дано натуральное число n. Выведите все числа от 1 до n.
const oneNNumbers = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(i);
    }
}
oneNNumbers(10);
console.log('============================');
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const ABNumbers = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}
ABNumbers(2, 8);
console.log('----------------------------');
ABNumbers(10, 5);
console.log('============================');

/*
-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
*/
const foo = (arr, i) => {
    for (let j = 0; j < arr.length; j++) {
        let change;
        if (j === i) {
            change = arr[j];
            if (i < arr.length - 1) {
                arr[j] = arr[i + 1];
                arr[j + 1] = change;
            } else {
                arr[j] = arr[0];
                arr[0] = change;
            }
        }
    }
    console.log(arr);
}
foo([9, 8, 0, 4], 0);
foo([9, 8, 0, 4], 1);
foo([9, 8, 0, 4], 2);
foo([9, 8, 0, 4], 3);
console.log('============================');
/*
- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]*/
const zeroEnd = (arr) => {
    if (arr.length >= 2 && arr.length <= 100) {
        let change;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 0) {
                for (j = i; j < arr.length - 1; j++) {
                    if (arr[j + 1] === 0 || j === arr.length - 1) {
                        break;
                    } else {
                        change = arr[j + 1];
                        arr[j + 1] = arr[j];
                        arr[j] = change;
                    }
                }
            }
        }
        console.log(arr);
    }
}
zeroEnd([1,0,6,0,3]);
zeroEnd([0,1,2,3,4]);
zeroEnd([0,0,1,0]);
zeroEnd([0,1]);