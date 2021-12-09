let stringLocalStorage = localStorage.getItem('favorites');
let arrLocalStorage = JSON.parse(stringLocalStorage);
arrLocalStorage.forEach(value =>{
    let div = document.createElement('div');
    div.classList.add('div-value');
    for (const key in value) {
        let p = document.createElement('p');
        p.innerText = `${key}: ${value[key]}`;
        div.appendChild(p);
        document.body.appendChild(div);
    }

})
