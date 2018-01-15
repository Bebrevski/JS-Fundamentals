function htmlEscape(arr) {

    let result = '<ul>\n';

    for (let i = 0; i < arr.length; i++) {

        result += '  <li>';

        let text = arr[i]
            .replace(/&/gm, '&amp;')
            .replace(/</gm, '&lt;')
            .replace(/>/gm, '&gt;')
            .replace(/"/gm, '&quot;');


        result += `${text}</li>\n`;
    }

    result += '</ul>';

    console.log(result);
}

htmlEscape(['<b>unescaped text</b>', 'normal text']);


/*


<	&lt;
>	&gt;
&	&amp;
"	&quot;


*/
