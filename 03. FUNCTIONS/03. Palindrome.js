function isPalindrome(word) {
    for(let i = 0; i < word.length / 2; i++){
        if(word[i] === word[word.length - 1 - i]){
            continue;
        }else{
            return false;
        }
    }

    return true;
}

isPalindrome('alabala');