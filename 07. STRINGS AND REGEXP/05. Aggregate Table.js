function solve(arr) {

    let towns = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ').filter(e => e !== '' && e !== '|');

        towns.push(tokens.slice(0, tokens.length - 1));

        sum += Number(tokens.pop());
    }

    for (let i = 0; i < towns.length; i++) {
        towns[i] = towns[i].join(' ');
    }

    console.log(towns.join(', '));
    console.log(sum);
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);