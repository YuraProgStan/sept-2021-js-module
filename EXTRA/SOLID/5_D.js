// Dependency inversion principle
/*Верхний уровень модулей не должен зависеть от абстракций нижнего уровня. Любые уровни должны зависеть от абстракций, но не от конкретики.
    Мы инверсируем зависимости. Такую концепцию использует Angular в своем ядре.*/

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}


class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}


const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'))