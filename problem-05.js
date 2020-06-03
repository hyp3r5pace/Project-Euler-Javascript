//Used the logic of finding the lowest number 
// by forming the number by multipying with power of primes lower than the bound
// The primes can be checked easily for the form 6k + 1 or 6k - 1.
"use strict";
function calcLargestPowerOfNumber(num, bound) {
    let power = 1;
    while (num ** power <= bound) {
        power++;
    }
    return (power-1);
}

function checkPrime(num) {
    if (!(num % 3)) {
        return false;
    }
    let i = 1;
    while ((6 * i - 1) ** 2 < num) {
        if (!(num % (6 * i - 1)) || !(num % (6 * i + 1)) || !(i++)) {
            return false;
        }
    }
    return true;
}

function calcLowestMulitple(num) {
    let multiple = 2 ** calcLargestPowerOfNumber(2, num) *
                    3 ** calcLargestPowerOfNumber(3, num);
    let i = 1;
    while (6 * i - 1 < num) {
        checkPrime(6 * i - 1) && (multiple *= (6 * i - 1) ** calcLargestPowerOfNumber(6 * i - 1, num));
        if (6 * i + 1 < num) {
            checkPrime(6 * i + 1) && (multiple *= (6 * i + 1) ** calcLargestPowerOfNumber(6 * i + 1, num));
        }
        i++;
    }
    return multiple;
}
//Start computation
console.log(calcLowestMulitple(20));


