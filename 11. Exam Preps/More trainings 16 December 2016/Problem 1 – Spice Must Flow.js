function solve(startinYield) {
    let days = 0;
    let totalAmount = 0;

    while (startinYield >= 100) {
        totalAmount += startinYield;
        totalAmount -= 26;
        days++;

        startinYield -= 10;
    }

    totalAmount -= 26;

    console.log(days);
    console.log(Math.max(0, totalAmount));
}

solve(100);