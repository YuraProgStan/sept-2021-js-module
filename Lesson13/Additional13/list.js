let products = JSON.parse(localStorage.getItem('Products'));
let divProducts = document.createElement('div');
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
for (const product of products) {
    let div = document.createElement('div');
    div.classList.add('product');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let img = document.createElement('img');
    let btn = document.createElement('button');
    btn.innerText = 'Delete this product from the bin';
    let divButton = document.createElement('div');
    divButton.appendChild(btn);
    h2.innerText = `${capitalizeFirstLetter(Object.keys(product)[0])}  ${product.name}`;
    p1.innerText = `${capitalizeFirstLetter(Object.keys(product)[1])}  ${product.count}`;
    p2.innerText = `${capitalizeFirstLetter(Object.keys(product)[2])}  ${product.price}`;
    img.src = product.url;
    div.append(h2, p1, p2, img, divButton);
    divProducts.appendChild(div);
    let item = 'Products';
    btn.addEventListener('click', function () {
        let products = JSON.parse(localStorage.getItem('Products'));
        products.forEach((value, index, arr) => {
            console.log('value', value.name);
            console.log('product', product.name);
                arr.splice(index, 1);
                localStorage.removeItem(item);
                localStorage.setItem(item, JSON.stringify(arr));
                div.innerText = "";
                location.reload();
        })
    })
}
let divBtnAll = document.createElement('div');
let btnAll = document.createElement('button');
btnAll.innerText = 'Delete all products from the bin';
btnAll.classList.add('btn-all')
divBtnAll.appendChild(btnAll);
document.getElementsByClassName('container')[0].append(divProducts, divBtnAll);
btnAll.addEventListener('click', function () {
    localStorage.removeItem('Products');
    let container = document.getElementsByClassName('container');
    container.innerText = "";
    location.reload();
})
