//Use the equation for sum of squares of first n natural
//numbers and sum of first n natural numbers.

"use strict";

function calcDifference(num) {
    return ((num * (num ** 2 - 1) * (3 * num + 2)) / 12);
}

//Start Computation
console.log(calcDifference(100));
