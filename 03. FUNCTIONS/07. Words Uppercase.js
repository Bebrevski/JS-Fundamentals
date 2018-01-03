function toUppercase(text) {

    let delimeter = /\w+/g;

    let tokens = delimeter.exec(text);

    console.log(tokens);
}

toUppercase('Hi, how are you?');