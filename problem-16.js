"use strict";
let number = BigInt(2 ** 1000);
let str = String(number), sum = 0;
for (let i = 0; i < str.length; i++) sum += parseInt(str[i]);

console.log(sum);