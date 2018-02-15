function solve(arrOfKingdoms, matrix) {
    let kingdomMap = new Map;

    for (let i = 0; i < arrOfKingdoms.length; i++) {
        let kingdom = arrOfKingdoms[i]['kingdom'];
        let general = arrOfKingdoms[i]['general'];
        let army = Number(arrOfKingdoms[i]['army']);

        if (!kingdomMap.has(kingdom)) {
            kingdomMap.set(kingdom, [])
        }

        let generals = kingdomMap.get(kingdom);
        if (!generals.filter(g => g['general'] === general).length > 0) {
            generals.push({general: general, army: army, wins: 0, losses: 0});
        } else {
            let generalObj = generals.find(g => g['general'] === general);
            generalObj['army'] += army;
        }

        kingdomMap.set(kingdom, generals);
    }

    matrix.forEach((fight) => {
        let [attackingK, attackingG, defendingK, defendingG] = fight;
        if (attackingK !== defendingK) {
            let attackingGObj = kingdomMap.get(attackingK).find(g => g['general'] === attackingG);
            let defendingGObj = kingdomMap.get(defendingK).find(g => g['general'] === defendingG);

            if (attackingGObj['army'] > defendingGObj['army']) {
                attackingGObj['army'] += attackingGObj['army'] * 0.1;
                defendingGObj['army'] -= defendingGObj['army'] * 0.1;
                attackingGObj['wins']++;
                defendingGObj['losses']++;
            }

            if (attackingGObj['army'] < defendingGObj['army']) {
                attackingGObj['army'] -= attackingGObj['army'] * 0.1;
                defendingGObj['army'] += defendingGObj['army'] * 0.1;
                attackingGObj['losses']++;
                defendingGObj['wins']++;
            }

            attackingGObj['army'] = Math.floor(attackingGObj['army']);
            defendingGObj['army'] = Math.floor(defendingGObj['army']);
        }
    });

    let [kingdomName, generals ] = [...kingdomMap.entries()].sort((a, b) => {
        let kingdomAName = a[0];
        let kingdomBName = b[0];
        let kingdomAGenerals = a[1];
        let kingdomBGenerals = b[1];

        let kingdomAWins = kingdomAGenerals.map(g => g['wins']).reduce((c, d) => c + d);
        let kingdomBWins = kingdomBGenerals.map(g => g['wins']).reduce((c, d) => c + d);

        let wins = kingdomBWins - kingdomAWins;
        if (wins === 0) {
            let kingdomALosses = kingdomAGenerals.map(g => g['losses']).reduce((c, d) => c + d);
            let kingdomBLosses = kingdomBGenerals.map(g => g['losses']).reduce((c, d) => c+ d);
            let losses = kingdomALosses - kingdomBLosses;

            if (losses === 0) {
                return kingdomAName.localeCompare(kingdomBName);
            } else {
                return losses;
            }
        }

        return wins;
    })[0];


    console.log(`Winner: ${kingdomName}`);
    generals.sort((a, b) => {
        return b['army'] - a['army'];
    })
        .forEach(g => {
            console.log(`/\\general: ${g['general']}`);
            console.log(`---army: ${g['army']}`);
            console.log(`---wins: ${g['wins']}`);
            console.log(`---losses: ${g['losses']}`);
        });

}

 solve([{kingdom: "Maiden Way", general: "Merek", army: 5000},
         {kingdom: "Stonegate", general: "Ulric", army: 4900},
         {kingdom: "Stonegate", general: "Doran", army: 70000},
         {kingdom: "YorkenShire", general: "Quinn", army: 0},
         {kingdom: "YorkenShire", general: "Quinn", army: 2000},
         {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
     [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
         ["Stonegate", "Ulric", "Stonegate", "Doran"],
         ["Stonegate", "Doran", "Maiden Way", "Merek"],
         ["Stonegate", "Ulric", "Maiden Way", "Merek"],
         ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
 );

// solve([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//         { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
// )

//
// solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
//         { kingdom: "Stonegate", general: "Ulric", army: 4900 },
//         { kingdom: "Stonegate", general: "Doran", army: 70000 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 0 },
//         { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
//     [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
//
// )