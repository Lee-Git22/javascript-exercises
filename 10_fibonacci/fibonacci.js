const fibonacci = function(input) {
    if (input < 0) {
        return "OOPS"
    }
    
    input = parseInt(input);

    const answer = [1, 1];
    for (i = 2; i < input; i++){
        answer[i] = answer[i - 1] + answer[i - 2];
    }
    return answer[input - 1];
};

// Do not edit below this line
module.exports = fibonacci;
