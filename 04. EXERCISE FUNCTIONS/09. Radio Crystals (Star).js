function radioCristal(arr) {

    let cut = (crystal) => crystal / 4;
    let lap = (crystal) => crystal * 0.8;
    let grind = (crystal) => crystal - 20;
    let etch = (crystal) => crystal - 2;

    let targetThickness = arr[0];

    for (let cr = 1; cr < arr.length; cr++) {

        let micrones = arr[cr];
        console.log(`Processing chunk ${micrones} microns`);

        micrones = executeOperation(micrones, 'Cut', cut);
        micrones = executeOperation(micrones, 'Lap', lap);
        micrones = executeOperation(micrones, 'Grind', grind);
        micrones = executeOperation(micrones, 'Etch', etch);

        if (micrones + 1 ===targetThickness){
          micrones = xRay(micrones);
        }
        console.log(`Finished crystal ${micrones} microns`);
    }
    function xRay(crystal) {
        console.log('X-ray x1');
        return crystal += 1;
    }

    function transportAndWash(crystal) {
        console.log('Transporting and washing');
        return Math.floor(crystal);
    }

    function executeOperation(micrones, opStr, op) {

        let newSize = op(micrones);

        let counter = 0;

        while (newSize >= targetThickness
        || Math.floor(targetThickness - newSize) === 1) {
            micrones = newSize;
            newSize = op(micrones);
            counter++;
        }

        if (counter > 0) {
            console.log(`${opStr} x${counter}`);
            micrones = transportAndWash(micrones);
        }

        return micrones;
    }
}

//radioCristal([1375, 50000]);
radioCristal([1000, 4000, 8100]);