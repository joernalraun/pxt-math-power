/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

function powfn(x: number, y: number): number {
	if (x > 0) {
		return Math.exp(y * Math.log(x))
	}
	if (x < 0 && Math.round(y) != y) {
		return Math.log(x)
	}
	return Math.pow(x, y);
}
	
let t0 = 0
let v = 0
input.onButtonPressed(Button.A, function () {
    t0 = control.millis()
    for (let index = 0; index <= 10000; index++) {
        v = powfn(-2, -2)
        v = powfn(10, 3 / 2)
    }
    t0 = control.millis() - t0
    basic.showNumber(t0)
    basic.showNumber(v)
})
input.onButtonPressed(Button.B, function () {
    t0 = control.millis()
    for (let index = 0; index <= 10000; index++) {
        v = Math.power(-2, -2)
        v = Math.power(10, 3 / 2)
    }
    t0 = control.millis() - t0
    basic.showNumber(t0)
    basic.showNumber(v)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.power(-2, -2))
    basic.showNumber(Math.power(2, -0.5))
    basic.showNumber(Math.power(10, 3 / 2))
    basic.showNumber(Math.power(-10, 3 / 2))
})
