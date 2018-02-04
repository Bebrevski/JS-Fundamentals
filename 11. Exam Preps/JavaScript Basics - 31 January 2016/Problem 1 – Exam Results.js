function solve(inpuLines) {
  
    let cource = inpuLines.pop().trim();
    let averageCource = 0;
    let count = 0;

    for (let line of inpuLines) {
        let [name, exam, examPoints, bonus] = line.split(' ').filter(e => e !== '');

        examPoints = Number(examPoints);
        bonus = Number(bonus);

        if (examPoints < 100) {
            console.log(`${name} failed at "${exam}"`);
            if (exam === cource) {
                averageCource += examPoints;
                count++;
            }
            continue;
        }

        let points = Math.round(((examPoints * 0.2) + bonus) * 100) / 100;
        let grade = ((points / 80) * 4) + 2;

        grade = Math.min(grade, 6).toFixed(2);

        console.log(`${name}: Exam - "${exam}"; Points - ${points}; Grade - ${grade}`);

        if (exam === cource) {
            averageCource += examPoints;
            count++;
        }
    }

    averageCource /= count;

    console.log(`"${cource}" average points -> ${Math.round(averageCource * 100) / 100}`);
}
/*
solve([
    'Pesho C#-Advanced 100 3.00000',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced'
]);
*/

solve([
    'EDUU    JS-Basics                317          15',
    'RoYaL        HTML5        121         10',
    'ApovBerger      OOP   0    10',
    'Stamat OOP   190 10',
    'MINKA OOP   230 10',
    'OOP'
]);