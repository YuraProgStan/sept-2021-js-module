const numSum = (number) => {
    if (number === 0){
        return 0;
    }
    else {
        let rez = number % 10;
        let rest = Math.trunc(number / 10); //берет значение до запятой
        console.log('rez = ' + rez, 'rest = ' + rest);
        return rez + numSum(rest);
    }
}
console.log(numSum(234));
const numSum1 = (number) => {
    return number.toString().split('').reduce((sum, current) => +sum + +current);
}
console.log(numSum1(234));

const numSum2 = (number) => {
    return eval(number.toString().replace(/(\d)(?=\d)/g, '$1+'));
}
console.log(numSum2(234));

const numSum3 = (number) => {
    return [...number.toString()].map(e =>parseInt(e)).reduce((sum,current)=>sum+current);
}
console.log(numSum3(234));

/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email =  email;
    this.phone = phone;
}
let users = [];
users[0] = new User(1, 'Vasya', 'Pupkin', 'test1@gmail.com', '0503345780');
users[1] = new User(2, 'Petya', 'Felipenko', 'test2@gmail.com', '0503345781');
users[2] = new User(3, 'Sveta', 'Martsinenko', 'test3@gmail.com', '0503345782');
users[3] = new User(4, 'Dasha', 'Kruglenko', 'test4@gmail.com', '0503345783');
users[4] = new User(5, 'Olya', 'Fetisova', 'test5@gmail.com', '0503345784');
users[5] = new User(6, 'Natasha', 'Naumenko', 'test6@gmail.com', '0503345785');
users[6] = new User(7, 'Sergey', 'Kozachenko', 'test7@gmail.com', '0503345786');
users[7] = new User(8, 'Oksana', 'Xvilya', 'test8@gmail.com', '0503345787');
users[8] = new User(9, 'Ostap', 'Bender', 'test9@gmail.com', '0503345788');
users[9] = new User(10, 'Maksim', 'Xrustenko', 'test10@gmail.com', '0503345789');
console.log(users);
/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
const filterPairedId = (arr) =>{
   return arr.filter(element => !(element.id % 2))
}
console.log(filterPairedId(users));
/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

const sortIncreaseId = (arr) =>{
    return arr.sort((a,b) => a.id-b.id);
}
console.log(sortIncreaseId(users));

/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
class Client{

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
clients[0] = new Client(1,'Vasya', 'Pupkin', 'test1@gmail.com', '0503345780',['product1', 'product2', 'product3'] );
clients[1] = new Client(2, 'Petya', 'Felipenko', 'test2@gmail.com', '0503345781', ['product1', 'product2', 'product3', 'product4']);
clients[2] = new Client(3, 'Sveta', 'Martsinenko', 'test3@gmail.com', '0503345782', ['product1', 'product2']);
clients[3] = new Client(4, 'Dasha', 'Kruglenko', 'test4@gmail.com', '0503345783', ['product1', 'product2', 'product3', 'product4', 'product5', 'product6']);
clients[4] = new Client(5, 'Olya', 'Fetisova', 'test5@gmail.com', '0503345784', ['product1']);
clients[5] = new Client(6, 'Natasha', 'Naumenko', 'test6@gmail.com', '0503345785', ['product1', 'product2']);
clients[6] = new Client(7, 'Sergey', 'Kozachenko', 'test7@gmail.com', '0503345786', ['product1', 'product2', 'product3', 'product4']);
clients[7] = new Client(8, 'Oksana', 'Xvilya', 'test8@gmail.com', '0503345787', ['product1', 'product2']);
clients[8] = new Client(9, 'Ostap', 'Bender', 'test9@gmail.com', '0503345788', ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7']);
clients[9] = new Client(10, 'Maksim', 'Xrustenko', 'test10@gmail.com', '0503345789', ['product1']);
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortIncreaseProduct = (arr) =>{
    return arr.sort((a,b) => a.order.length-b.order.length);
}
console.log(sortIncreaseProduct(clients));