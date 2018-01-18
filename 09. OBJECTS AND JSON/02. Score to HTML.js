function solve(json) {
    let str = JSON.parse(json);

    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';

    for (let obj of str) {
        html+= '  <tr>';
        html += `<th>${escapeHTML(obj.name)}</th><th>${Number(obj.score)}</th>`;
        html += '</tr>\n';
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

solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');