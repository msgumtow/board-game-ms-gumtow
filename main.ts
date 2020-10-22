input.onButtonPressed(Button.A, function () {
    sprite.move(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 4))
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
