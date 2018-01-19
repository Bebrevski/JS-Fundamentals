function solve(arr) {

    let result = [];

    for (let i = 1; i < arr.length; i++) {

        let [town, latitude, longitude] = arr[i].split('|').filter(e => e !== '');

        let currentCity = {
            'Town': town.trim(),
            'Latitude': Number(latitude),
            'Longitude': Number(longitude)
        };

        result.push(currentCity);
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);