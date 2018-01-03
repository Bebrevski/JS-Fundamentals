function printSquare(n = 5){
    for (let i = 1; i <= n; i++){
        lineOfStars(n);
    }

    function lineOfStars(count) {
        console.log('* '.repeat(count));
    }
}

printSquare(10)