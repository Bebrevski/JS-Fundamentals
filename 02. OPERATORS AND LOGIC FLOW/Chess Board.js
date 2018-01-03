function chessBoard(num) {

    let html = '<div class="chessboard">\n';

    let color = '';

    for (let i = 1; i <= num; i++) {

        html += '<div>\n';

        for (let j = 1; j <= num; j++) {

            if ((i + j) % 2 === 0 ) {
                color = 'black';
            }else {
                color = 'white';
            }

            html += `<span class="${color}"></span>\n`;
        }

        html += '</div>\n';
    }

    html += '</div>';

   return html;
}

chessBoard(5);