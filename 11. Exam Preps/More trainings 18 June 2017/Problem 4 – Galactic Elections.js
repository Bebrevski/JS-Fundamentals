function solve(arrayOfBallots) {
    let record = new Map();
    let systemWinner = new Map();
    let winnerTotalVotes = new Map();
    let totalVotes = 0;

    for (let obj of arrayOfBallots) {
        if (!record.has(obj.system)) {
            record.set(obj.system, new Map());
        }
        if (!record.get(obj.system).has(obj.candidate)) {
            record.get(obj.system).set(obj.candidate, 0);
        }

        let votesOldValue = record.get(obj.system).get(obj.candidate);
        record.get(obj.system).set(obj.candidate, votesOldValue + Number(obj.votes));
        totalVotes += Number(obj.votes);
    }

    for (let [system, candidates] of record) {
        record.set(system, new Map([...candidates].sort((c1, c2) => c2[1] - c1[1])));
    }

    for (let [system, candidates] of record) {
        let winner = [...candidates.keys()][0];
        if (!systemWinner.has(winner)){
          systemWinner.set(winner, new Map());
        }

        systemWinner.get(winner).set(system, [...candidates.values()].reduce((a, b) => a + b));
    }

    for (let [winner, systems] of systemWinner) {
        systemWinner.set(winner, new Map([...systems].sort((a, b) => b[1] - a[1])));
    }

    for (let [winner, systems] of systemWinner) {
        winnerTotalVotes.set(winner, [...systems.values()].reduce((a, b) => a + b));
    }

    winnerTotalVotes = new Map([...winnerTotalVotes].sort((a, b) => b[1] - a[1]));

    let winnerName = [...winnerTotalVotes][0][0];
    let winnerVotes = [...winnerTotalVotes][0][1];
    let winnerPercentage = (winnerVotes / totalVotes) * 100;

    if ([...winnerTotalVotes].length === 1){
        console.log(`${winnerName} wins with ${winnerVotes} votes`);
        console.log(`${winnerName} wins unopposed!`);
        return;
    }

    let runnerUpName = [...winnerTotalVotes][1][0];
    let runnerUpPercentage = ([...winnerTotalVotes][1][1] / totalVotes) * 100;

    if (winnerPercentage > 50) {
        console.log(`${winnerName} wins with ${winnerVotes} votes`);
        console.log(`Runner up: ${runnerUpName}`);
        for (const [system, votes] of systemWinner.get(runnerUpName)) {
            console.log(`${system}: ${votes}`)
        }
        return
    }

    console.log(`Runoff between ${winnerName} with ${Math.floor(winnerPercentage)}% and ${runnerUpName} with ${Math.floor(runnerUpPercentage)}%`);

}

/*solve([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);*/

solve([{system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
    {system: 'Tau', candidate: 'Space Cow', votes: 100},
    {system: 'Theta', candidate: 'Space Cow', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
    {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
    {system: 'Omicron', candidate: 'Octocat', votes: 75}]);