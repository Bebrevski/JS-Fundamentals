function solve(input) {

    let goldForDays = input.map(Number);
    let money = 0;
    let bitcoins = 0;
    let firstDay = 0;

    for (let i = 0; i < goldForDays.length; i++) {
        if ((i + 1) % 3 === 0 && i !== 0) {
            money += goldForDays[i] * 0.7 * 67.51;
        } else {
            money += goldForDays[i] * 67.51;
        }
        if (money >= 11949.16) {
            let last = Math.trunc(money / 11949.16);
            bitcoins += Math.trunc(money / 11949.16);
            money -= 11949.16 * last;
            if (firstDay === 0) {
                firstDay = i + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve(['100', '200', '300']);