function cookTheNumber(tokens) {

    let [start, op1, op2, op3, op4, op5] =
    [Number(tokens[0]), tokens[1], tokens[2], tokens[3], tokens[4], tokens[5]];

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => ++num;
    let bake = (num) => num * 3;
    let fillet = (num) => num * 0.8;

    for (let op of [op1, op2, op3, op4, op5]) {
        switch (op){
            case 'chop': start = chop(start); break;
            case 'dice': start = dice(start); break;
            case 'spice': start = spice(start); break;
            case 'bake': start = bake(start); break;
            case 'fillet': start = fillet(start); break;
        }

        console.log(start);
    }
}

cookTheNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);