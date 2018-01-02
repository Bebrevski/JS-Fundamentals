function checkNum(num) {
    "use strict";

    if (num !== Math.round(num)) {
        console.log('invalid')
    } else if (num % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}

checkNum(5);
checkNum(8);
checkNum(1.5);