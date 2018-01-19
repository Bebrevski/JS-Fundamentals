function solve(grads) {
    let celsius = grads * 0.9 % 360;

    if (celsius < 0){
      celsius = 360 - Math.abs(celsius);
    }

    console.log(celsius);
}

solve(-50);