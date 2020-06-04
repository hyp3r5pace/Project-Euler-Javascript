'use strict'
// One has to primarily use nested loops of O(n^2) to figure
// out the value of the terms, although a little bit of calculations
// will help to establish constraints which will help to bound the loop iteration.
// Constraints: c < 500  and b < 500 and b > 250, if b < 250, a > b
// abc = 0.5 * 10 ** 6 * c - 10 ** 3 * c 

function calcTheTerms() {
  for (let b = 499; b > 250; b--) {
    for (let a = 500 - b; a < b; a++) {
      let c = 1000 - (a + b);
      if ((c < 500) && (c ** 2 === a ** 2 + b ** 2)) {
        return c;
      }
    }
  }
}

function calcTheProduct(num) {
  return (5 * 10 ** 5 * num - 10 ** 3 * num ** 2);
}

console.log( calcTheProduct( calcTheTerms() ) );

