/* Code is specifically crafted for problem 3.
   It will not work for composite numbers which have their
   largest prime factor as 2 or 3. Loop starts from 5 :/
*/

"use strict";

function checkPrime(num) {
    for (let i = 2; i <= (num ** 0.5); i++) {
        if (!(num % i)) {
            return false;
        }
    }
    return true;
}

function findMaxPrimeFactor() {
    let num = 600851475143;
    let max;
    for (let i = 5; i <= num; i += 2) {
        let check = checkPrime(i) && !(num % i);
        check && (num = num / i) && (max = i);
    }

    showMaxPrimeFactor(max);
}

function showMaxPrimeFactor(num) {
    console.log(`Largest prime factor is ${num}`);
}
// Start computation
findMaxPrimeFactor();
