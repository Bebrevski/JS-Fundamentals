function solve([x, y, xMin, xMax, yMin, yMax]) {

    return x >= xMin && x <= xMax && y >= yMin && y <= yMax ? 'inside' : 'outside';
}