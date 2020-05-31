"use strict";

function checkOdd(num) {
    return ( (num%2) ? true : false );
}

function getNextFibTerm(term1,term2) {
        return ( term1 + term2 );
}

function sumOfEvenFibTerm() {
    let term1 = 1,
        term2 = 2,
        sum   = 2;
    
    while (getNextFibTerm(term1,term2) <= 4000000) {    
        if (checkOdd(term1) && checkOdd(term2)) {
            let temp = term1;
            (term1 = term2) && (term2 = getNextFibTerm(temp,term2));
            sum += term2;
        } else {
            let temp = term1;
            (term1 = term2) && (term2 = getNextFibTerm(temp,term2));
        }
    }

    showSum(sum);

}


function showSum(sum) {
    console.log(` Required sum is ${sum}`);
}

sumOfEvenFibTerm();
