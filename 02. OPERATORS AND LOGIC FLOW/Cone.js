function coneParams(radius, height) {
    "use strict";
    let volume = 1 / 3 * Math.PI * (radius ** 2) * height;
    let totalSurface = Math.PI * radius * (radius + (Math.sqrt(radius ** 2 + height ** 2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);
}

coneParams(3, 5);
coneParams(3.3, 7.8);

