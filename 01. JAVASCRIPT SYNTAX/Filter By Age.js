function filter(minAge, firstName, firstAge, secondName, secondAge) {

    let firstPersonData = {name: firstName, age: Number(firstAge)};
    let secondPersonData = {name: secondName, age: Number(secondAge)};

    let arr = [firstPersonData, secondPersonData];

    for (let person of arr) {
        if(person.age >= Number(minAge)) {
            console.log(person);
        }
    }
}

filter(16, 'Hristofor', 99, 'Asen', 16);