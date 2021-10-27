const removeFromArray = function() {
    // The array is the first argument, arguments[0]
    // Check arguments starting at second argument
    for (let i = 1; i < arguments.length; i++) {
        // Look through all items in the array
        for (let j = 0; j < arguments[0].length; j++) {
             // Splice out any matching arguments from the array
            if (arguments[i] === arguments[0][j]) {
                arguments[0].splice(j, 1);
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
