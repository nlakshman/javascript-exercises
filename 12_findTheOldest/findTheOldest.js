const findTheOldest = function(people) {
    // Set curent year as age endpoint (proxy for year of death)
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
    }
    // Initialize first person as oldest
    let oldAge = people[0].yearOfDeath - people[0].yearOfBirth;
    let oldest = people[0];
    // Check if anyone else is older than first person in array, and if so, make them the new oldest person
    for (let i = 1; i < people.length; i++) {
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        if (age > oldAge) {
            oldAge = age;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
