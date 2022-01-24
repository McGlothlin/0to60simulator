const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


const start = new Start(0, canvas.height - 200, canvas.width, 20, 'gray')
const finish = new Finish(0, 100, 20, 20, 3)


const car1 = new Car(canvas.width / 2 - 75, canvas.height - 100, 30, 66, 1, 'crimson')
const car2 = new Car(canvas.width / 2 + 75, canvas.height - 100, 30, 66, 1.1, 'navy')


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width ,canvas.height)

    start.draw()
    finish.draw()
    car1.draw()
    car1.update()
    car2.draw()
    car2.update()
}

animate()

