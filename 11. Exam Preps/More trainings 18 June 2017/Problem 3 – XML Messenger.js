function solve(input) {
    let validInputPattern = /^(?:<message)(\s+([a-z]+)="([a-zA-Z0-9.\s]+)")+>(.*?\n?.*?)+<\/message>$/gm;

    if (!validInputPattern.test(input)) {
        console.log('Invalid message format');
        return;
    }

    let attributePattern = /\b([a-z]+)="([a-zA-Z0-9.\s]+)"/gm;

    let match = attributePattern.exec(input);
    let sender = '';
    let recipient = '';

    while (match) {
        if (match[1] === 'to') {
            recipient = match[2];
        } else if (match[1] === 'from') {
            sender = match[2];
        }

        match = attributePattern.exec(input);
    }

    if (sender === '' || recipient === '') {
        console.log('Missing attributes');
        return;
    }

    let output = '<article>\n';
    output += `  <div>From: <span class="sender">${sender}</span></div>\n`;
    output += `  <div>To: <span class="recipient">${recipient}</span></div>\n`;

    let messagePattern = /(?:>)(.*\n?.*)(?:<)/gm;
    let message = input.match(messagePattern);
    
    message = message[0].split(`\n`);
    for (let i = 0; i < message.length; i++) {
        if (message[i].startsWith(`>`)){
          message[i] = message[i].substr(1);
        }
        if (message[i].endsWith(`<`)){
            message[i] = message[i].substr(0,message[i].length - 1);
        }
    }

    output += `  <div>\n`;
    message.forEach(e => {
        output += `    <p>${e}</p>\n`
    });
    output += `  </div>\n`;
    output += '</article>';

    console.log(output);
}

solve(`<message from="Pedro" to="Zaira" topic="Prxima Centauri discoveries">We have detected a distortion in the light patterns of Proxima Centauri.
It's likely this is a new rocky planet of approximately Earth-mass.
This is very exciting news!
Sincerely, Pedro Amado</message>`);