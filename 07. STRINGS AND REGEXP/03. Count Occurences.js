function solve(searchStr, text) {

    let count = 0;

    let index = text.indexOf(searchStr, 0);

    while (index !== -1){

        count++;
        index = text.indexOf(searchStr, index + 1);
    }

    console.log(count);
}

solve('the', 'The quick brown fox jumps over the lay dog.');
solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');