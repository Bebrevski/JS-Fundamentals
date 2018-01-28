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
            townAndPassengers.set(town, {arrivals: Number(passengers), departures: 0});
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

    console.log([...planesLanded]);

    console.log('Planes left:');
    for (let [plane, condition] of planesLanded) {
        if (condition === 'land') {
            console.log(`- ${plane}`);
        }
    }
    for (let [town, passengers] of townAndPassengers) {
        console.log(town);
        console.log(`Arrivals: ${passengers.arrivals}`);
        console.log(`Departures: ${passengers.departures}`);
        console.log('Planes:');
        for (let [plane, city] of planeAndCity) {
            if (city.has(town)) {
                console.log(`-- ${plane}`);
            }
        }
    }
}

solve([
        "Boeing474 Madrid 300 land",
        "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart",
        "ATR72 WashingtonDC 272 land",
        "ATR72 Madrid 135 depart"
    ]
);

solve(["Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
]);