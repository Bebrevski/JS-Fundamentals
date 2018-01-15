function solve(text) {

    let result = text.replace(/(-?\d+)\s*\*\s*(-?\d*\.?\d+)/gm, func);

    console.log(result);

    function func(match, gr1, gr2) {
        return Number(gr1) * Number(gr2);
    }
}

solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');
solve('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).');