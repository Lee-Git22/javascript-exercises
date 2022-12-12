const findTheOldest = function(people) {
    let today = new Date();
    const year = today.getFullYear();

    const oldest = people.sort(function(a, b) {
        if (!(a.hasOwnProperty("yearOfDeath"))) {
            a.yearOfDeath = (year);
        }

        if(!(b.hasOwnProperty("yearOfDeath"))) {
            b.yearOfDeath = (year);
        }

        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
