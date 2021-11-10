const palindromes = function (string) {
    // Make lower case and remove spaces and punctuation
    let newString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    // Check if string characters at begining position matches that at end, and move inwards on both ends till halfway point
    let length = newString.length
    for (let i = 0; i < length/2; i++) {
        if (newString[i] !== newString[length - 1 - i]) {
                return false;
        }
    }
    return true;
};

    // Alternate solution
    // Split string into array of characters using newString.split("")
    // Reverse the array and joing it back into string using .reverse and .join("")
    // Compare result to newString
// Do not edit below this line
module.exports = palindromes;
