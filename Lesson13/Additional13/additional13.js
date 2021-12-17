/*
- Імітуємо наповнення інтернет магазину товарами :
    Створити форму з наступними полями :
    - назва товару
- кількість товару
- ціна товару
- картинка товару (посилання з інтернету)
Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
    До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар*/
let a = document.createElement('a');
a.href = 'list.html';
a.target= '_blank';
a.innerText = 'Page product';
document.getElementById('aDiv').appendChild(a);
let form = document.forms[0];
form.onsubmit = function (e) {
    e.preventDefault();
    let nameProduct = form.nameproduct.value;
    let countProduct = form.countproduct.value;
    let priceProduct = form.priceproduct.value;
    let urlImage = form.urlimage.value;
    let obj = {};
    if (nameProduct && countProduct && countProduct && priceProduct && urlImage) {
        obj.name = nameProduct;
        obj.count = countProduct;
        obj.price = priceProduct;
        obj.url = urlImage;
    }
    let item = 'Products';
    let saveProducts = (array) => {
        let newProducts = JSON.parse(localStorage.getItem(item)) || [];
        newProducts.push(array);
        localStorage.setItem(item,JSON.stringify(newProducts) )
    }
    saveProducts(obj);
}