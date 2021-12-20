// Open Close Principle

/*Какие-то классы, которые мы создаем, должны быть открыты для расширения, но закрыты для модификации. Мы должны проэктировать
   наши классы таким образом, чтобы, если даже появятся какие-то новые кейсы, чтобы не модифицировать старый код, а он уже был спроектирован
   таким образом, чтобы, даже, если приносите что-то новое, вы не меняете свой старый код.*/

class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super()
        this.a = a
        this.b = b
    }

    area() {
        return (this.a * this.b) / 2
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}


const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10, 20),
    new Triangle(10, 15)
])

console.log(calc.sum())