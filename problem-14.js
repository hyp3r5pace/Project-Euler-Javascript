"use strict";

function getPowerOfTwoTable() {
    let table = {}, i = 1;
    while (2 ** i < 3 * 10 ** 6 + 1) (table[2 ** i] = i) && ++i;
    return table;
}

let powerOfTwoTable = getPowerOfTwoTable();

function getCollatzStep(num, twoTable, stepTable) {
    let step = 0;
    while (num != 1) {
        if (stepTable[num]) {
            return (step + stepTable[num]);
        }
        if (num % 2) (num = 3 * num + 1) && ++step;
        else {
            if (twoTable[num]) return (step + twoTable[num]);
            else (num /= 2) && ++step;
        }
    }
    return step;
}

function getHighestStepColatzNumber(twoTable) {
    let max = 0, temp, num = 0, stepTable = {};
    for (let i  = 2; i <= 10 ** 6; i++) {
        temp = getCollatzStep(i, twoTable, stepTable);
        stepTable[i] = temp;
        if (temp > max) (max = temp) && (num = i);
    }
    return num;
}

console.log(getHighestStepColatzNumber(powerOfTwoTable));
