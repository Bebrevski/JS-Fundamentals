function solve(arr) {
    let newArr = [];
    let num = 1;

    for (let command of arr) {
        if (command === 'add'){

            newArr.push(num);
            num++;

        }else {

            newArr.pop(num);
            num++;
        }
    }

    if (newArr.length ===0){
      console.log('Empty');
    }else {
        console.log(newArr.join('\n'));
    }
}

solve(['add','add', 'remove', 'add', 'add']);