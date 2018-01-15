function solve(username, email, phoneNumber, data) {

    function repl(match, group) {
        switch (group){
            case '!': return username;
            case '@': return email;
            case '+': return phoneNumber;
        }
    }

    data.forEach(line => {
        line = line
            .replace(/<([!@+])[a-zA-Z]+([!@+])>/gm, repl);
        console.log(line);
    })
}

/*function solve(username, email, phoneNumber, data) {
    data.forEach(line => {
        line = line
            .replace(/<![a-zA-Z]+!>/gm, username)
            .replace(/<@[a-zA-Z]+@>/gm, email)
            .replace(/<\+[a-zA-Z]+\+>/gm, phoneNumber);
        console.log(line);
    })
}*/

solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);