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
        const initialY = this.y
        const colors = ['#EEEEEE', '#111111']
        var color = colors[0]

        while (yCounter < this.thickness) {
            while (this.x < canvas.width) {
                color = colors[xCounter % 2]
                const square = new FinishSquare(this.x, this.y, this.squareWidth, this.squareWidth, color)
                square.draw()
                xCounter = xCounter + 1
                this.x = this.x + this.width
            }

            this.y = this.y - this.squareWidth
            this.x = initialX
            xCounter = yCounter = yCounter + 1 // Gives us that offset for checkers
        }
        this.y = initialY
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
