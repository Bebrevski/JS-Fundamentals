function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let steps = 0;

    while (base > 2) {
        steps++;
        if (steps % 5 === 0 && steps !== 0) {
            stone += ((base - 2) ** 2) * increment;
            lapis += ((base ** 2) - ((base - 2) ** 2)) * increment;
        } else {
            stone += ((base - 2) ** 2) * increment;
            marble += ((base ** 2) - ((base - 2) ** 2)) * increment;
        }

        base -= 2;
    }

    let gold = (base ** 2) * increment;
    steps++;
    let height = steps * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

solve(11, 1);
solve(11, 0.75);
solve(12, 1);
solve(23, 0.5);