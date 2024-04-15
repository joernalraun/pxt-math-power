/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
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
    TNumber power(TNumber x, TNumber y) {
        return fromFloat(::pow(toFloat(x), toFloat(y)));
    }	
}
