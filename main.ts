input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
    basic.showNumber(randint(0, 100))
})
basic.showIcon(IconNames.Heart)
basic.showString("LOVE METER")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
