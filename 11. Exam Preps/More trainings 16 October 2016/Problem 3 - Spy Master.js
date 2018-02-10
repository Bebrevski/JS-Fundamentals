function solve(input) {
    let key = input.shift();
    let pattern = '((?: |^)';

    for (let i = 0; i < key.length; i++) {
        pattern += '[' + key[i].toLowerCase() + key.toUpperCase() + ']';
    }

    pattern += '[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)';
    pattern = new RegExp(pattern, 'g');

    for (let line of input) {
        let match = pattern.exec(line);
        while (match) {
            line = line.replace(pattern, replaceKey);

            match = pattern.exec(line);
        }
        console.log(line);
    }

    function replaceKey(match,group1,group2,group3) {
        group2 = group2
            .replace(/!/g, '1')
            .replace(/%/g, '2')
            .replace(/#/g, '3')
            .replace(/\$/g, '4')
            .replace(/([A-Z])/g, (match, g1) => g1.toLowerCase());

        return group1 + group2 + group3;
    }
}

solve([
`tricky`,
`And now the tricky tests`,
`Tricky CAREFULL!#$%; with what you decode Tricky CAREFULL!#$%`,
`Tricky HERECOMESDASH- with what you decode Tricky HERECOMESDASH -`,
`Try again stricky NOTTHEFIRSTONE  tricky NOTTHEFIRSTONE`,
`Be very carefull now trICkY plainwrong, trICkY PLAINWRONG`,
`next challenge (tRickY SOME$WORDS) tRickY SOME$WORDS`,
`It's tricky TOUSETHECORRECTREPLACE? tricky TOUSETHECORRECTREPLACE ,`,
`now with commas triCky RAND!$OM%$#TE!#XT, triCky RAND!$OM%$#TE!#XT.`,
`DON'T match this plz TRICKY | TEXT#TEXT. TRICKY  TEXT#TEXT.`,
`Try with commas -triCkY COMMAHERE, triCkY COMMAHERE, wow`
]);