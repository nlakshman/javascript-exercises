const sumAll = function(firstNum, secondNum) {
    // Check constraints
    if (typeof(firstNum) != "number" || typeof(secondNum) != "number" || isNaN(secondNum) || firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }
    // Determine which argument is the lower number
    let lowNum = 0
    let highNum = 0
    if (firstNum < secondNum) {
        lowNum = firstNum;
        highNum = secondNum;
    }
    else {
        lowNum = secondNum;
        highNum = firstNum;
    }
    let sum = 0
    for (let i = lowNum; i <= highNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
