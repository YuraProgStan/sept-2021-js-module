// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, make, year, maxSpeed, maxPower, addDriver) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.maxSpeed = maxSpeed; //kmH
    this.maxPower = maxPower; // engineCapacity
    this.drive = function () {
        console.log(`We are driving with a speed ${this.maxSpeed} por hour`);
    };
    this.info = function () {
        console.log(`
        model - ${this.model}\n
        make - ${this.make}\n
        year - ${this.year}\n
        maxSpeed - ${this.maxSpeed} km/h\n
        maxPower - ${this.maxPower} kW\n
       `);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(`We are driving with a speed ${this.maxSpeed + newSpeed} por hour`);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`Year - ${this.year}`);
    };
    this.addDriver = addDriver;
}

function AddDriver(name, drivingExperience) {
    this.name = name;
    this.drivingExperience = drivingExperience;
}

let cars = new Car('Model S', 'Tesla', 2021, 322, 250);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
cars.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
cars.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
cars.increaseMaxSpeed(20);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
cars.changeYear(2019);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let driver = new AddDriver('Sasha', 10);
 cars = new Car('Model S', 'Tesla', 2021, 322, 250, driver);
 console.log(cars);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car1 {

    constructor(model, make, year, maxSpeed, maxPower){
        this.model = model;
        this.make = make;
        this.year = year;
        this.maxSpeed = maxSpeed; //kmH
        this.maxPower = maxPower; // engineCapacity
    }

   drive () {
        console.log(`We are driving with a speed ${this.maxSpeed} por hour`);
    };
    info () {
        console.log(`
        model - ${this.model}\n
        make - ${this.make}\n
        year - ${this.year}\n
        maxSpeed - ${this.maxSpeed} km/h\n
        maxPower - ${this.maxPower} kW\n
       `);
    };
    increaseMaxSpeed (newSpeed) {
        console.log(`We are driving with a speed ${this.maxSpeed + newSpeed} por hour`);
    };
    changeYear (newValue) {
        this.year = newValue;
        console.log(`Year - ${this.year}`);
    };
}

class AddDriver1 extends Car1  {
    constructor(model, make, year, maxSpeed, maxPower,addDriver){
        super(model, make, year, maxSpeed, maxPower);
        this.addDriver = addDriver;
    }

}
class Driver1 {
    constructor(name, drivingExperience) {
        this.name = name;
        this.drivingExperience = drivingExperience;
    }
}

let cars1 = new Car1('Model S', 'Tesla', 2021, 322, 250);
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
cars1.drive();
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
cars1.info();
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
cars1.increaseMaxSpeed(20);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
cars1.changeYear(2019);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
let driver1 = new Driver1('Sasha', 10);
console.log(driver1);
let addDriver1 = new AddDriver1('Model S', 'Tesla', 2021, 322, 250, driver1);
console.log(addDriver1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [];
cinderellas[0] = new Cinderella('Sveta',18, 37);
cinderellas[1] = new Cinderella('Lena',19, 35);
cinderellas[2] = new Cinderella('Natasha',21, 38);
cinderellas[3] = new Cinderella('Marina',26, 36);
cinderellas[4] = new Cinderella('Oksana',22, 39);
cinderellas[5] = new Cinderella('Liza',23, 37);
cinderellas[6] = new Cinderella('Olya',24, 38);
cinderellas[7] = new Cinderella('Dasha',25, 37);
cinderellas[8] = new Cinderella('Nina',26, 35);
cinderellas[9] = new Cinderella('Nina',27, 38);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, findFootSize) {
        this.name = name;
        this.age = age;
        this.findFootSize = findFootSize;
    }
}
let prince = new Prince('Yura', 30, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let element of cinderellas) {
    if(element.footSize === prince.findFootSize){
        console.log(element);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = cinderellas.find(element => element.footSize === prince.findFootSize);
console.log(findCinderella);
