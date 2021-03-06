/*- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com


Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.*/
let validate = (email) => {
    for (let element of email) {
        if (!((element >= 'A' && element <= 'Z')
            || (element >= 'a' && element <= 'z')
            || element === '_'
            || element === '.'
            || element === '-'
            || element === '@'
            || element >= '0' && element <= '9')) {
            return false;
        }
    }
    let em = email.indexOf("@");
    let point = email.lastIndexOf("\.");
    return email.length > 0 &&
        em > 0 &&
        point > em + 1 &&
        point < email.length &&
        email[em + 1] !== "." &&
        email.indexOf(" ") === -1 &&
        email.indexOf("..") === -1 &&
        count (email,'@') === '1';

}
console.log(validate('someemail@gmail.com'));
console.log(validate('someeMAIL@gmail.com'));
console.log(validate('someeMAIL@i.ua'));
console.log(validate('some.email@gmail.com'));
console.log(validate('some.em[ail@gmail.com'));
console.log(validate('som@e.email@gmail.com'));
console.log(validate('som!e.em^ail@gmail.com'));
console.log('============================');
/*- є масивlet coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


відсортувати його в спадаючому порядку за кількістю елементів в полі modules*/
let sortArr = (arr) => arr.sort((a, b) => b.modules.length - a.modules.length);
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(sortArr(coursesArray));
console.log('============================');

/*- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5*/
let symb = "о", str = "Астрономия это наука о небесных объектах";
function count (str, stringsearch) {
    let counts = 0;
    for (const element of str) {
        if (element === stringsearch) {
            counts++;
        }
    }
    return counts.toString();
}
document.writeln(count(str, symb));
console.log(count(str, symb));
document.write('<hr>');
console.log('============================');
/*

- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'*/
let strLast = "Сила тяжести приложена к центру масс тела";
let cutString = (str, n) => {
    let arr = str.split(' ');
    if (n <= arr.length){
    let rezArr = [];
    for (let i = 0; i < n; i++) {
        rezArr.push(arr[i]);
    }
    return rezArr.join(' ');
    }
    else {
        return 'Error';
    }
}
console.log(cutString(strLast, 5));
document.writeln(cutString(strLast, 5));