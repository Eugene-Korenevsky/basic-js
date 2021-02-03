const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let result = '';
    let sep = '+';
    let addSep = '|';
    if (options.separator != undefined) sep = options.separator;
    if (options.additionSeparator != undefined) addSep = options.additionSeparator;
    if (options.repeatTimes == undefined) return result = str + options.addition;
    for (let i = 0; i < options.repeatTimes; i++) {
        let additionSeparator = addSep;
        let additionString = '';
        if (i == options.repeatTimes - 1) sep = '';
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            if (j == options.additionRepeatTimes - 1) additionSeparator = '';
            additionString = additionString + options.addition + additionSeparator;
        }
        result = result + str + additionString + sep;
    }
    return result;
}