"use strict";

function checkMultipleOf3(num) {
    return ( (num % 3) ? false : true );
}

function checkMultipleOf5(num) {
    return ( (num % 5) ? false : true );
}

function getSum(num1,num2) {
    return ( num1 + num2 );
}

function sumOftheMultiples() {
    let sum = 0;

    for (let i = 3; i < 1000; i++ ) {
        ( checkMultipleOf3(i) || checkMultipleOf5(i) ) && (sum = getSum(sum,i) ); 
    }

    showFinalSum(sum);
}

function showFinalSum( sum ) {
        console.log(`Sum of the multiples of 3 or 5 below 1000 is: ${sum}`);
}

// Starting the computation

sumOftheMultiples();
