function solve(text, word) {

    let pattern = new RegExp('\\b' + word + '\\b', 'gi');

    let match = pattern.exec(text);
    let counter = 0;

    while (match !== null) {
        counter++;
        match = pattern.exec(text);
    }

    console.log(counter);
}

solve('The waterfall was so high, that the child couldn’t see its peak.', 'the');
solve('How do you plan on achieving that? How? How can you even think of that?', 'how');
solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');