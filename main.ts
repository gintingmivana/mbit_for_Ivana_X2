music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
let X = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0
]
let y = [
0,
0,
0,
0,
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1
]
basic.forever(function () {
    for (let index = 0; index <= X.length; index++) {
        led.plot(X[index], y[index])
        basic.pause(200)
        basic.clearScreen()
    }
})
