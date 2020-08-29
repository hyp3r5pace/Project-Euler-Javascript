"use strict"

let letter_count = {"1": 3, "2": 3, "3": 5, "4": 4, "5": 4, "6": 3, "7": 5, "8": 5, "9": 4, "10": 3,
                    "11": 6, "12": 6, "13": 8, "14": 8, "15": 7, "16": 7, "17": 9, "18": 8, "19": 8, "20": 6,
                    "30": 6, "40": 5, "50": 5, "60": 5, "70": 7, "80": 6, "90": 6,
                    "100": 7};

function getLetterCount() {
    let count = 11, temp = 0;
    for (let i = 1; i <= 20; i++) temp += letter_count[i];
    for (let i = 30; i <= 90; i+= 10) temp += letter_count[i];
    for (let i = 20; i <= 90; i+= 10) temp += letter_count[i] * 9 + 36;
    count += temp;
    for (let i = 100; i <= 900; i+= 100) {
        count += letter_count[100] + letter_count[i/100];
        count += (letter_count[100] + letter_count[i/100] + 3) * 99 + temp; 
    }
    return count;
}

console.log(getLetterCount());