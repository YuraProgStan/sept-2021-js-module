/*-створити форму з інпутами для name та age.
    При відправці форми записати об'єкт в localstorage*/
let f1 = document.forms.f1
f1.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    let obj = {name: name, age: age};
    let stringObj = JSON.stringify(obj);
    localStorage.setItem('k1', stringObj);
}


/*
-створити форму з інпутами для model,type та volume автівки.
    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/
let f2 = document.forms.f2;
f2.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let obj ={model: model, type: type, volume: volume};
    let car = [obj];
    let stringArr = JSON.stringify(car);
    let cars = localStorage.getItem('cars');
    if (!cars) {
        cars = [];
        cars.push(car);
        localStorage.setItem('cars', stringArr);
    } else {
        let purseCars = JSON.parse(cars);
        purseCars.push(car);
        localStorage.setItem('cars', JSON.stringify(purseCars));
    }
}