const palindromes = function (string) {
    
    function isLetter(c) {
        return (/[a-zA-Z]/).test(c)
    }

    let text1 = "";
    let text2 = ""; 

    for (i = 0; i < string.length; i++) {
        if (isLetter(string.charAt(i))){
            text1 += string.charAt(i).toLowerCase();
            text2 = string.charAt(i).toLowerCase() + text2; 
        }
    }

    if (text1 == text2){
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
