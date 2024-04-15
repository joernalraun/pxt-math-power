/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

#include "pxt.h"
#include <cmath>


/*
namespace Math {

    // %
    TNumber power(TNumber x, TNumber y) {
        return fromDouble(::pow(toDouble(x), toDouble(y)));
    }	
}
*/


namespace Math {

    //%
    float power(float x, float y) {
        return ::pow(x, y);
    }
	
}
