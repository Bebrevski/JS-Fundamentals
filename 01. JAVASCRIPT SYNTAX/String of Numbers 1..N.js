function stringOfNums(num) {

    let concatenated = '';

    for (let i = 1; i <= num; i++) {

        concatenated += i.toString();
    }

    console.log(concatenated);
}

stringOfNums(11);