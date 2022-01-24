const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const startLinePosition = 1100 // canvas.height - 200
const finishLinePosition = 100
const raceDistance = startLinePosition - finishLinePosition
const monitorRefreshRate = 60

const start = new Start(0, canvas.height - 200, canvas.width, 20, 'gray')
const finish = new Finish(0, 100, 20, 20, 3)

car1PerformanceTime = document.getElementById('car1input').value
car2PerformanceTime = document.getElementById('car2input').value

const car1velocity = raceDistance / (car1PerformanceTime * monitorRefreshRate)
const car2velocity = raceDistance / (car2PerformanceTime * monitorRefreshRate)

const car1 = new Car(canvas.width / 2 - 75, startLinePosition, 30, 66, car1velocity, 'crimson')
const car2 = new Car(canvas.width / 2 + 75, startLinePosition, 30, 66, car2velocity, 'navy')


function animate(refreshRate) {
    requestAnimationFrame(animate)
    now = Date.now()
    elapsed = now - then
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval)

        c.clearRect(0, 0, canvas.width, canvas.height)

        start.draw()
        finish.draw()
        car1.draw()
        car1.update()
        car2.draw()
        car2.update()
        animationEndTime = Date.now()

    }
}

// Source: https://stackoverflow.com/a/19772220/5472966
function startAnimating(refreshRate) {
    fpsInterval = 1000 / refreshRate;
    then = Date.now();
    startTime = then;
    animate(refreshRate);
}
startAnimating(monitorRefreshRate)

//animate()
