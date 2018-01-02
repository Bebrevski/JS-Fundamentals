function circleArea(radius) {
    "use strict";
    let area = Math.PI * ((2 * radius) ** 2) / 4;

    console.log(area);
    console.log(area.toFixed(2));
}

circleArea(5);