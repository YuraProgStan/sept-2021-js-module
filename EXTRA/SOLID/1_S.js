// Single Responsibility Principle
/*Единичная ответственность принцип. По мере роста приложения требуется больше функционала.
   Какому-то классу нужно добавлять новый функционал, который будет смешивать его изначальное поведение.
   И это будет не соответствовать данному принципу, т.к. данный принцип говорит, что если есть какое-то другое поведение,
   то его нужно вынести в отдельный класс.*/
class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
    }
}


const printer = new NewsPrinter(
    new News('Зеленский', 'Двойное гражданство')
)

console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())