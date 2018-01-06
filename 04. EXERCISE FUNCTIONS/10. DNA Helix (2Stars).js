function dna(num) {

    let sequence = 'ATCGTTAGGG';

    let star = [2, 1, 0 ,1];

    for (let i = 0; i < num * 2; i += 2) {

        let symbol1 = sequence[i % sequence.length];
        let symbol2 = sequence[i % sequence.length + 1];

        console.log('*'.repeat(star[0]) + `${symbol1}` + '-'.repeat(6 - 2 - star[0] * 2) + `${symbol2}` + '*'.repeat(star[0]));

        let temp = star[0];
        star.shift();
        star.push(temp);
    }
}

dna(20);