function solve(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let z1 = coordinates[2];
    let x2 = coordinates[3];
    let y2 = coordinates[4];
    let z2 = coordinates[5];

    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z1 - z2) ** 2);

    console.log(distance);
}

solve([3.5, 0, 1, 0, 2, -1]);