const removeFromArray = function() {
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arguments[0].length; j++) {
            if (arguments[i] === arguments[0][j]) {
                arguments[0].splice(j, 1);
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
