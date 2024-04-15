namespace Math {
    /**
     * Returns the value of a base expression taken to a specified power.
     * @param x The base value of the expression.
     * @param y The exponent value of the expression.
     */
	//% shim=Math::power
    //% block="$x|to power $y"
    //% x.defl=1
    //% y.defl=1
    export function power(x: number, y: number): number {
        if (x > 0) {
            return Math.exp(y * Math.log(x))
        }
        if (x < 0 && Math.round(y) != y) {
            return Math.log(x)
        }
        return Math.pow(x, y);
    }
}
