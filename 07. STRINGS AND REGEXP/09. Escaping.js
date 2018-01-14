function htmlEscape(arr) {

    let result = '<ul>\n';

    for (let i = 0; i < arr.length; i++) {
        result += ' <li>';

        let currentText = arr[i];
        currentText = replace(currentText, '&');
        currentText = replace(currentText, '>');
        currentText = replace(currentText, '<');
        currentText = replace(currentText, '\"');

        result += `${currentText}</li>\n`;
    }

    result += '</ul>';

    console.log(result);

    function replace(text, symbol) {

        let current = text;
        let index = current.indexOf(symbol);

        while (index !== -1) {
            if (symbol === '<') {
                current = current.replace(symbol, '&lt;');
                index = current.indexOf(symbol);
            } else if (symbol === '>') {
                current = current.replace(symbol, '&gt;');
                index = current.indexOf(symbol);
            } else if (symbol === '&') {
                current = current.replace(symbol, '&amp;');
                index = current.indexOf(symbol);
            } else if (symbol === '\"') {
                current = current.replace(symbol, '&quot;');
                index = current.indexOf(symbol);
            }
        }

        return current;
    }
}

/*


<	&lt;
>	&gt;
&	&amp;
"	&quot;


*/
