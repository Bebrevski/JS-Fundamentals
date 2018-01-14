function solve(email) {

    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;

    return regex.test(email) ? 'Valid' : 'Invalid';
}

solve('valid@email.bg');
solve('invalid@emai1.bg');