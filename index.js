const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Car {
    constructor(x, y, width, height, velocity, color) {
        this.x = x
        this.y = y

        this.width = width
        this.height = height
        this.velocity = velocity
        this.color = color

    }

    draw() {
        c.beginPath()
        c.rect(this.x, this.y, this.width, this.height)
        c.fillStyle = this.color
        c.fill()
    }
}


class Start {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y

        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        c.beginPath()
        c.rect(this.x, this.y, this.width, this.height)
        c.fillStyle = this.color
        c.fill()
    }
}


class Finish {
    constructor(x, y, width, height, thickness) {
        this.x = x
        this.y = y

        this.width = width
        this.height = height
        this.thickness = thickness
        this.squareWidth = 20
    }

    draw() {
        c.beginPath()
        let xCounter = 0
        let yCounter = 0
        const initialX = this.x

        let color = '#111111'
        while (yCounter < this.thickness) {
            while (this.x < canvas.width) {
                if (xCounter % 2 === 0) {
                    color = '#EEEEEE'
                } else {
                    color = '#111111'
                }
                const square = new FinishSquare(this.x, this.y, this.squareWidth, this.squareWidth, color)
                square.draw()
                xCounter = xCounter + 1
                this.x = this.x + this.width
            }

            this.y = this.y - this.squareWidth
            this.x = initialX
            xCounter = xCounter + 1 // Gives us that offset for checkers
            yCounter = yCounter + 1
        }

    }
}

class FinishSquare {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y

        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        c.beginPath()
        c.rect(this.x, this.y, this.width, this.height)
        c.fillStyle = this.color
        c.fill()
    }
}


const start = new Start(0, 780, canvas.width, 20, 'gray')
const finish = new Finish(0, 100, 20, 20, 3)

const car1 = new Car(canvas.width / 2 - 75, 800, 30, 66, 0, 'crimson')
const car2 = new Car(canvas.width / 2 + 75, 800, 30, 66, 0, 'navy')

start.draw()
finish.draw()
car1.draw()
car2.draw()



var box1 = document.createElement('input'); // creates the element
box1.style.position = 'absolute'
box1.style.left = '200'
box1.style.top = '900'
box1.id = 'car1_input'
document.body.appendChild(box1);

var car1Label = document.createElement('label')
car1Label.setAttribute("for", 'car1_input')
car1Label.innerHTML = 'Car 1 0-60 Time'
car1Label.style.position = 'absolute'
car1Label.style.left = '200'
car1Label.style.top = '880'
document.body.appendChild(car1Label)


var box2 = document.createElement('input')
box2.style.position = 'absolute'
box2.style.left = '900'
box2.style.top = '900'
document.body.appendChild(box2)

var car2Label = document.createElement('label')
car2Label.setAttribute("for", 'car1_input')
car2Label.innerHTML = 'Car 2 0-60 Time'
car2Label.style.position = 'absolute'
car2Label.style.left = '900'
car2Label.style.top = '880'
document.body.appendChild(car2Label)