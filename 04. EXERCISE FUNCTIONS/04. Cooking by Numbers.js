function cookTheNumber(tokens) {

    let startingNum = Number(tokens[0]);

    doOperations(startingNum, tokens);

    function doOperations(num, arr) {

        let result = num;

        for (let i = 1; i < arr.length; i++) {
            switch (arr[i]){
                case 'chop':
                    console.log(result /= 2);
                    break;
                case 'dice':
                    console.log(result = Math.sqrt(result));
                    break;
                case 'spice':
                    console.log(++result);
                    break;
                case 'bake':
                    console.log(result *= 3);
                    break;
                case 'fillet':
                    console.log(result *= 0.8);
                    break;
                default: break;
            }
        }

        return result
    }
}

cookTheNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);