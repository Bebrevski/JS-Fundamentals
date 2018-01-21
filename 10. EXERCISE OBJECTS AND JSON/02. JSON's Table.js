function solve(arr) {

    let html = '<table>\n';

    for (let obj of arr) {

        html += '   <tr>\n';

        let employee = JSON.parse(obj);

        html += `       <td>${escapeHTML(employee.name)}</td>\n`;
        html += `       <td>${escapeHTML(employee.position)}</td>\n`;
        html += `       <td>${Number(employee.salary)}</td>\n`;

        html += '   <tr>\n';
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

solve([
'{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'
]);