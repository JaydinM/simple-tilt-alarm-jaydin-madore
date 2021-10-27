input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . # . #
        `)
    music.playMelody("G A B B B A G G ", 120)
})
basic.forever(function () {
	
})
