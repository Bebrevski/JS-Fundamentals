function solve(arr) {

    let record = [];

    for (let heroes of arr) {
        let [hero, level, items] = heroes.split(/\s\/\s?/g);

        let currentHero = {};

        if (items === undefined){
            currentHero = {
                'name': hero,
                'level': Number(level),
                'items': []
            };
        }else {
            currentHero = {
                'name': hero,
                'level': Number(level),
                'items': items.split(', ')
            };
        }


        record.push(currentHero);
    }

    let json = JSON.stringify(record);

    console.log(json);
}

//solve([
//'Isacc / 25 / Apple, GravityGun',
//'Derek / 12 / BarrelVest, DestructionSword',
//'Hes / 1 / Desolator, Sentinel, Antara',
//]);
//
//solve(['Jake / 1000 / Gauss, HolidayGrenade']);
solve(['Jake / 1000']);