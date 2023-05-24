let y = 0
let x = 0
let h = randint(-1, 1)
let v = randint(-1, 1)
basic.forever(function () {
    basic.clearScreen()
    led.plot(x, y)
    x += h
    y += v
    basic.pause(200)
})
