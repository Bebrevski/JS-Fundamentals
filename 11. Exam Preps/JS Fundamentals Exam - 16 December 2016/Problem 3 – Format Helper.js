function solve(text) {
    text = text[0]
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, '.')
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;])\s+(?=[.,!?:;])/g, (match, g1) => `${g1}`);

    console.log(text);
}

solve(['Now, let\'s test some! $#@!1! strange symbols followed, be some more: (@!#$#@$DF%$);NewLines cannot be used, tear! ):']);
solve(['Terribly formatted text   . With chaotic spacings." Terrible quoting    "! . . .   Also this date is pretty confusing :    20 .  12  . 16 .']);