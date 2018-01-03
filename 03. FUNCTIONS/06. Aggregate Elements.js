function aggregate(arr) {

    console.log(sumSequnce(arr));
    console.log(inverseValues(arr));
    console.log(concatContent(arr));


    function sumSequnce(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }


    function inverseValues(array) {
        let result = 0;

        for (let i = 0; i < array.length; i++) {
            result += 1 / array[i];
        }

        return result;
    }

    function concatContent(array) {
        let concatenatedString = '';

        for (let i = 0; i < array.length; i++) {
            concatenatedString += array[i];
        }

        return concatenatedString;
    }
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);