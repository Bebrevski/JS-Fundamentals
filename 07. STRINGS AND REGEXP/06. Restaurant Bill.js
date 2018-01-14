function solve(arr) {
    let products = arr.filter((e, i) => i % 2 === 0);
    let prices = arr.filter((e, i) => i % 2 !== 0);

    let sum = prices.reduce((a, b) => Number(a) + Number(b));

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);