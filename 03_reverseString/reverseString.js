const reverseString = function(str) {
    let stringArray = str.split("");
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");
    // Decrementing For Loop Method:
    // let reversedString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedString += str[i];
    // }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
