function solve(inputArray) {
    let hashCode = inputArray.pop();

    for (let i = 0; i < inputArray.length; i += 3) {
        let methodTokens = inputArray[i];
        let credentialTokens = inputArray[i + 1];
        let contentTokens = inputArray[i + 2];

        let methodPattern = /^Method: (GET|POST|PUT|DELETE)$/g;
        let credentialPattern = /^Credentials: (Basic|Bearer) ([a-zA-Z0-9]+)$/g;
        let contentPattern = /^Content: ([a-zA-Z0-9.]+)$/g;


        let methodMatch = methodPattern.exec(methodTokens);
        let credentialsMatch = credentialPattern.exec(credentialTokens);
        let contentMatch = contentPattern.exec(contentTokens);

        let response = 'Response-';

        if (methodMatch === null || credentialsMatch === null || contentMatch === null) {
            response += `Code:400`;
            console.log(response);
            continue;
        }

        let method = methodMatch[1];
        let type = credentialsMatch[1];
        let token = credentialsMatch[2];

        if ((method === 'PUT' || method === 'POST' || method === 'DELETE') && type === 'Basic') {
            response += `Method:${method}&Code:401`;
            console.log(response);
            continue;
        }

        let hashPattern = /([0-9])([a-zA-Z])/g;
        let match = hashPattern.exec(hashCode);
        let validToken = false;
        while (match) {
            let num = Number(match[1]);
            let letter = match[2];
            let count = 0;

            for (let j = 0; j < token.length; j++) {
                if (letter === token[j]) {
                    count++;
                    if (count > num){
                      break;
                    }
                }
            }

            if (count !== num) {
                count = 0;
                continue;
            } else if (count === num) {
                validToken = true;
                break;
            }

            match = hashPattern.exec(hashCode);
        }

        if (!validToken) {
            response += `Method:${method}&Code:403`;
            console.log(response);
            continue;
        }

        response += `Method:${method}&Code:200&Header:${token}`;
        console.log(response);

        response = 'Response-';
    }
}

solve([
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q'
]);

solve([
    'Method: PUT',
    'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123',
    'Method: POST',
    'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    'Method: DELETE',
    'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content',
    '2e5g'
]);