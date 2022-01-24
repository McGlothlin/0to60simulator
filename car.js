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

    update(refreshRate) {
        this.draw()
        this.y = this.y - this.velocity
    }
}
