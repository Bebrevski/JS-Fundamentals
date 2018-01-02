function getType(product) {

    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    for (let fruit of fruits) {
        if (product === fruit) {
            return 'fruit';
        }
    }

    for (let vegetable of vegetables) {
        if (product === vegetable) {
            return 'vegetable';
        }
    }

    return 'unknown';
}