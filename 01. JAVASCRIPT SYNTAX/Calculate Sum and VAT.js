function sumAndVAT(arr) {

    let sum =0;

    for (let i = 0; i < arr.length; i++) {

        sum+=arr[i];
    }

    let VAT = sum * 0.2;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${VAT}`);
    console.log(`total = ${sum + VAT}`);
}

sumAndVAT([1.20, 2.60, 3.50]);