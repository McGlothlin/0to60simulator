const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var isAnimating = 0

canvas.width = innerWidth
canvas.height = innerHeight

const startLinePosition = canvas.height - 320
const finishLinePosition = 100
const raceDistance = startLinePosition - finishLinePosition
const monitorRefreshRate = 60

const start = new Start(0, startLinePosition, canvas.width, 20, 'gray')
const finish = new Finish(0, 100, 20, 20, 3)

car1 = initCar1()
car2 = initCar2()

// Draw these when the page loads.
function beginDraw() {
    start.draw()
    finish.draw()
    car1.image.onload = function() {
        car1.draw()
    }
    car2.image.onload = function() {
        car2.draw()
    }
}

function animate() {
    animationFrame = requestAnimationFrame(animate)
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

function startAnimating(refreshRate) {
    // Only allow one animation frame at a time.
    if (isAnimating !== 0) {
        return
    }
    isAnimating += 1

    var car1PerformanceTime = Number(document.getElementById('car1input').value)
    var car2PerformanceTime = Number(document.getElementById('car2input').value)
    var car1velocity = raceDistance / (car1PerformanceTime * refreshRate)
    var car2velocity = raceDistance / (car2PerformanceTime * refreshRate)

    car1.velocity = car1velocity
    car2.velocity = car2velocity

    // Basic idea from: https://stackoverflow.com/a/19772220/5472966
    fpsInterval = 1000 / refreshRate;
    then = Date.now();
    animate(refreshRate);
}

function reset() {
    car1 = initCar1()
    car2 = initCar2()
    isAnimating = 0
}

beginDraw()
window.onresize = function(){ location.reload(); }
