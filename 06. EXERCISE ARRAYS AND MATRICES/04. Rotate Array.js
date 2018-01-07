function solve(arr) {
    let rotationCount = Number(arr.pop());
    rotationCount %= arr.length;

    for (let i = 0; i < rotationCount; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15000000000']);