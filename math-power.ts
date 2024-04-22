/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

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
        if (Math.floor(y) == y) {
			Math.pow(x, y)
		}
        if (x > 0) {
            return Math.exp(y * Math.log(x))
        }
        return Math.log(x)
    }
}
