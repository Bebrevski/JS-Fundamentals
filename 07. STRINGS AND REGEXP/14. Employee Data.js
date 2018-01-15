function solve(arr) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let person of arr) {
        let match = pattern.exec(person);

        if (match === null) continue;

        console.log(`Name: ${match[1]}`);
        console.log(`Position: ${match[3]}`);
        console.log(`Salary: ${match[2]}`);
    }
}

solve(['Isacc - 1000 - CEO', 'Peter - 500 - Employee', 'Ivan - 500 - Employee']);
solve(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader']);