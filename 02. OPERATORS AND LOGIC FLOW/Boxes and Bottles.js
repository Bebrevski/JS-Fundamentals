function calcBoxes(bottles, capacity) {

    let result = Math.ceil(bottles/capacity);

    console.log(result);
}

calcBoxes(20, 5);
calcBoxes(15, 7);
calcBoxes(5, 10);