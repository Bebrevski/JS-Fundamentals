function solve(text, str) {
    if (text.endsWith(str, text.length)) {
        return true;
    }

    return false;
}