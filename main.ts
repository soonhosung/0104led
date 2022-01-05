let x = 0
let y = 0
let z = 0
basic.forever(function () {
    x = 0
    y = 0
    z = 50
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(x, y, z)
            x += 1
        }
        x = 0
        y += 1
        z += 50
        basic.pause(1000)
    }
    basic.clearScreen()
    basic.pause(1000)
})
