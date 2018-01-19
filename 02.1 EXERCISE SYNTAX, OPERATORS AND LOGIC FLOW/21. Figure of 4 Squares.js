function figure(num) {

    if (num === 2) {
        console.log('+'.repeat(3));
        return;
    }

    let dashes = num - 2;

    console.log(`+${'-'.repeat(dashes)}+${'-'.repeat(dashes)}+`);

    let pipes = num % 2 === 0 ? (num - 4) / 2 : (num - 3) / 2;

    for (let i = 0; i < pipes; i++) {
        console.log(`|${' '.repeat(dashes)}|${' '.repeat(dashes)}|`);
    }

    console.log(`+${'-'.repeat(dashes)}+${'-'.repeat(dashes)}+`);

    for (let i = 0; i < pipes; i++) {
        console.log(`|${' '.repeat(dashes)}|${' '.repeat(dashes)}|`);
    }

    console.log(`+${'-'.repeat(dashes)}+${'-'.repeat(dashes)}+`);
}

figure(2);