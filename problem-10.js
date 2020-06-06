// Used the idea of sieve of eratosthenes since the upper bound was provided.
// Created a hashtable using object, and initialized everything to 0 except
// mulitples of 3,which were intialized with 1.Then, marked all composites and
// kept adding up the primes. 
'use strict';

function InitializeList(num) {
  let list = {};
  for (let i = 5; i < num; i+=2) {
    list[i] = (i % 3) ? 0 : 1;
  }
  return list;
}

function totalPrimeSum(num) {
  let list = InitializeList(num);
  let i = 1,
    sum = 5;
  while (6 * i - 1 < num) {
    if (list[6 * i - 1] == 0) {
      for (let j = (6 * i - 1) ** 2; j < num; j += 2 * (6 * i - 1)) {
        list[j] = 1;
      }
      sum += 6 * i - 1;
    }

    if (6 * i + 1 >= num) return sum;

    if (list[6 * i + 1] == 0) {
      for (let j = (6 * i + 1) ** 2; j < num; j += 2 * (6 * i + 1)) {
        list[j] = 1;
      }
      sum += 6 * i + 1;
    }

    i++;
  }

  return sum;
}

// Start Computation 
let execTime;
console.time(execTime);
let Sum = totalPrimeSum(2000000);
console.timeEnd(execTime);
console.log(Sum);
