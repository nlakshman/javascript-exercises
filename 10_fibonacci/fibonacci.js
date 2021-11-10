const fibonacci = function(positiveInteger) {
    if (positiveInteger < 1) {
        return "OOPS"
    }
    // Initialize array of fibonacci sequence
    fibArray = [1, 1]
    // Generate fibonacci sequence until positiveInteger value
    for (let i = 2; i < positiveInteger; i++){ 
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }
    // Return position value of positiveInteger in sequence
    return fibArray[positiveInteger - 1]
};

// Do not edit below this line
module.exports = fibonacci;
