
function test( str: string, num: number) {
    serial.writeString(str + " = ")
    serial.writeNumber(num)
    serial.writeLine("")
}

input.onButtonPressed(Button.A, function () {
    test("Math.power(10, 3 / 2)", 				Math.power(10, 3 / 2))
    test("Math.power(-1.4142135623730951, -2)", Math.power(-1.4142135623730951, -2))
    test("Math.power(-1, 3 / 2)", 				Math.power(-1, 3 / 2))
    test("Math.power(0, 1)", 					Math.power(0, 1))
    test("Math.power(0, -1)", 					Math.power(0, -1))
})