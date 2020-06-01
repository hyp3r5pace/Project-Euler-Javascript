// Core concept to speed up the computation is that every
// even length palindrome has 11 as it's prime factor.
"use strict";

function checkPalindrome(num) {
    num = String(num);
    for (let i = 0; i < num.length/2; i++) {
       if (num[i] != num[num.length-1-i]) {
           return false;
       }
    }
    return true;
}

function getLargestPalindrome() {
    let largerTerm = 0,
        palindrome = 0;
    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
           if ((!(i % 11) || !(j % 11)) && checkPalindrome(i * j) && (i * j > palindrome)) {
               (palindrome = i * j) && (largerTerm = j);
           }
           if (i < largerTerm) return palindrome;
        }
    } 
}

console.log(getLargestPalindrome());
