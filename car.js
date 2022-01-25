class Car {
    constructor(x, y, width, height, velocity, imagesrc) {
        this.x = x
        this.y = y

        this.width = width
        this.height = height
        this.velocity = velocity

        const image = new Image()
        image.src = imagesrc
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    update(refreshRate) {
        this.draw()
        this.y = this.y - this.velocity
    }
}

function initCar1() {
    return new Car(canvas.width / 2 - (canvas.width / 6), startLinePosition + 20, 50, 100, 0, 'images/auto_red.png')
}

function initCar2() {
    return new Car(canvas.width / 2 + (canvas.width / 6), startLinePosition + 20, 50, 100, 0, 'images/auto_blue.png')
}
