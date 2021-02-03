const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!members) {
        return false;
    }
    let names = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof(members[i]) === "string") {
            let name = members[i].split(' ').join('').toUpperCase();
            names.push(name[0]);
        }
    }
    names.sort();
    return names.join('');
}