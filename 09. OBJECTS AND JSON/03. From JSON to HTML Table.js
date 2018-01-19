function fromJSONToHTMLTable(str) {
    let objs = JSON.parse(str);
    let html = '<table>\n';

    html += '   <tr>';

    for (let key of Object.keys(objs[0])) {
        html += `<th>${key}</th>`;
    }

    html += '</tr>\n';

    for (let obj of objs) {
        html += '   <tr>';

        let keys = Object.keys(obj);

        for (let key of keys) {

            if (Number(obj[key])){
                html += `<td>${Number(obj[key])}</td>`;
            }else {
                html += `<td>${escapeHTML(obj[key])}</td>`;
            }
        }

        html += '</tr>\n'
    }

    html += '</table>';

    console.log(html);

    function escapeHTML(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;',
        };

        return text.replace(/[\\"&'<>]/g, c => map[c]);
    }
}

fromJSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');

fromJSONToHTMLTable(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`
);