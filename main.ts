input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F D G E F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showNumber(12)
