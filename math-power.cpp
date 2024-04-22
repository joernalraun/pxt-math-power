/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

#include "pxt.h"
#include <cmath>


namespace Math {

    //%
    TNumber power(TNumber x, TNumber y) {
		double dx = toDouble(x);
		double dy = toDouble(y);
		if ( ::floor( dy) == dy)
		{
			return fromDouble(__builtin_powi(dx, dy));
		}
		if ( dx > 0)
		{
			return fromDouble( ::exp( dy * ::log( dx)));
		}
		return fromDouble( ::log( dx));
    }	
}
