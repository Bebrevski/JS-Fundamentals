function isPrime(num) {

    let prime = true;

    let sqrt = Math.sqrt(num);

    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }

    return prime && (num > 1);
}

console.log(isPrime(10));