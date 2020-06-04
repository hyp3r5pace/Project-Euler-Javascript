"use strict";
// checkPrime checks for number greater than 3
function checkPrime(num) {
  if (!(num % 3)) return false;
  let i = 1;

  while ((6 * i - 1) ** 2 <= num) {
    if (!(num % (6 * i - 1))) return false;
    if (!(num % (6 * i + 1))) return false;
    i++;
  }

  return true;
}

function getPrime(num) {
    let count = 2;
    let i = 1;
    while (count < num) {
      checkPrime(6 * i - 1) && count++;
      if (count == num) return (6 * i -1);
      checkPrime(6 * i + 1) && count++;
      i++;
    }
    return (6 * (--i) + 1);
}

console.log(getPrime(10001));
