function solve(recordOfPlanes) {

    let planesLanded = new Map();
    let townAndPassengers = new Map();
    let planeAndCity = new Map();

    for (let currentPlane of recordOfPlanes) {
        let [plane, town, passengers, condition] = currentPlane.split(' ');

        if (!planesLanded.has(plane) && condition !== 'depart') {
            planesLanded.set(plane, condition);
        } else {
            if ((planesLanded.get(plane) === 'land' && condition === 'depart') ||
                (planesLanded.get(plane) === 'depart' && condition === 'land')) {
                planesLanded.set(plane, condition);
            } else {
                continue;
            }
        }

        if (!townAndPassengers.has(town)) {
            if (planesLanded.get(plane) === 'land') {
                townAndPassengers.set(town, {arrivals: Number(passengers), departures: 0});
            } else if (planesLanded.get(plane) === 'depart') {
                townAndPassengers.set(town, {arrivals: 0, departures: Number(passengers)});
            }

        } else {
            if (planesLanded.get(plane) === 'land') {
                let arrivalsOldValue = townAndPassengers.get(town).arrivals;
                let departureOldValue = townAndPassengers.get(town).departures;

                townAndPassengers.set(town, {
                    arrivals: Number(passengers) + arrivalsOldValue,
                    departures: departureOldValue
                })
            } else if (planesLanded.get(plane) === 'depart') {
                let arrivalsOldValue = townAndPassengers.get(town).arrivals;
                let departureOldValue = townAndPassengers.get(town).departures;

                townAndPassengers.set(town, {
                    arrivals: arrivalsOldValue,
                    departures: departureOldValue + Number(passengers)
                })
            }
        }

        if (!planeAndCity.has(plane)) {
            planeAndCity.set(plane, new Set());
        }
        planeAndCity.get(plane).add(town);
    }

    console.log('Planes left:');
    for (let [plane, condition] of [...planesLanded].sort((p1, p2) => p1[0].localeCompare(p2[0]))) {
        if (condition === 'land') {
            console.log(`- ${plane}`);
        }
    }
    for (let [town, passengers] of [...townAndPassengers].sort(function (a, b) {
        if (b[1].arrivals > a[1].arrivals) return 1;
        if (b[1].arrivals < a[1].arrivals) return -1;
        return a[0].localeCompare(b[0]);
    })) {
        console.log(town);
        console.log(`Arrivals: ${passengers.arrivals}`);
        console.log(`Departures: ${passengers.departures}`);
        console.log('Planes:');
        for (let [plane, city] of [...planeAndCity].sort(function (a, b) {
            return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        })) {
            if (city.has(town)) {
                console.log(`-- ${plane}`);
            }
        }
    }
}

/*
function solve(input) {
    let planes = new Set();
    let port = new Map();

    for (let plane of input) {
        let tokens = plane.split(" ");
        let name = tokens[0];
        let town = tokens[1];
        let ppl = Number(tokens[2]);
        let action = tokens[3];

        if (action == 'depart') {
            if (!planes.has(name)) continue;
            else {
                planes.delete(name);
            }
        }
        if (action == 'land') {
            if (planes.has(name)) continue;
            else {
                planes.add(name);
            }
        }

        if (!port.has(town)) {
            port.set(town, {planes: [], arrivals: 0, departures: 0});
        }
        if (!port.get(town).planes.includes(name)) {
            port.get(town).planes.push(name);
        }
        if (action == "land") {
            port.get(town).arrivals += ppl;
        } else {
            port.get(town).departures += ppl;
        }
    }
    console.log("Planes left:");
    [...planes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`- ${p}`));
    [...port].sort((t1, t2) => {
        if (t1[1].arrivals < t2[1].arrivals) return 1;
        if (t1[1].arrivals > t2[1].arrivals) return -1;
        return t1[0].localeCompare(t2[0]);
    }).forEach(logData);

    function logData(town) {
        //console.log(`${town[0]} ${town[1].arrivals} ${town[1].departures}`);
        console.log(town[0]);
        console.log(`Arrivals: ${town[1].arrivals}`);
        console.log(`Departures: ${town[1].departures}`);
        console.log("Planes:");
        town[1].planes.sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`-- ${p}`));
    }
}
 */