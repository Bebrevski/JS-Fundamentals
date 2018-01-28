function solve(startingYield) {

    let total = 0;
    let days = 0;
    if (startingYield < 100) {
        console.log(days + '\n' + total);
        return;
    }

    while (startingYield >= 100) {
        total += startingYield;
        days++;
        startingYield -= 10;
        if (total >= 26) {
            total -= 26;
        } else {
            total = 0;
        }
    }
    if (total >= 26) {
        total -= 26;
    } else {
        total = 0;
    }

    console.log(days + '\n' + total);

}
solve(99);
solve(111);
solve(450);
solve(200);