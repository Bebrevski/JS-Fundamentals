function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let takeTo = arr[i].indexOf('@');
        let username = arr[i].substr(0, takeTo);
        username += `.${arr[i][takeTo + 1]}`;

        let indexOfDot = arr[i].indexOf('.', takeTo);

        while (indexOfDot !== -1){

            username += `${arr[i][indexOfDot + 1]}`;

            indexOfDot = arr[i].indexOf('.', indexOfDot + 1);
        }

        result.push(username);
    }

    console.log(result.join(', '));
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);