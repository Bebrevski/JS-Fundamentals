function modify(num) {

    let numToManipulate = num.toString();
    let average = getAverage(numToManipulate);

    while (average <= 5) {
        numToManipulate = addNine(numToManipulate);
        average = getAverage(numToManipulate);
    }

    console.log(numToManipulate);

    function getAverage(numToStr) {
        let result = 0;

        for (let i = 0; i < numToStr.length; i++) {
            result += Number(numToStr[i]);
        }

        return result / numToStr.length;
    }

    function addNine(numAsStr) {
        return numAsStr + '9';
    }
}

modify(101);
modify(5835);