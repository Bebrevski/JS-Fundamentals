function solve(input) {

    let viktorDamage = 0;
    let viktorCount = 1;
    let viktorRecord = [];
    let naskorDamage = 0;
    let naskorCount = 1;
    let naskorRecord = [];

    for (let i = 0; i < input.length; i++) {
        let [damage, color, weapon] = input[i].split(' ');
        damage = Number(damage);
        if (color === 'white') {
            viktorDamage += damage;
            viktorRecord.push(damage);
            if (viktorRecord[viktorRecord.length - 1] === viktorRecord[viktorRecord.length - 2]) {
                viktorCount++;
            }
            if (viktorCount === 2) {
                viktorCount = 0;
                viktorDamage += damage * 2.75 - damage;
            }
        } else if (color === 'dark') {
            naskorDamage += damage;
            naskorRecord.push(damage);
            if (naskorRecord[naskorRecord.length - 1] === naskorRecord[naskorRecord.length - 2]) {
                naskorCount++;
            }
            if (naskorCount === 5) {
                naskorCount = 0;
                naskorDamage += damage * 4.5 - damage;
            }
        }
    }

    if (viktorDamage > naskorDamage) {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${viktorDamage * 60}`);
        return;
    } else if (naskorDamage > viktorDamage) {
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${naskorDamage * 60}`);
        return;
    }
}

solve([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);

solve([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);