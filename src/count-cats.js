const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let res = 0;
    if (!matrix) {
        return res;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let b = 0; b < matrix[i].length; b++) {
            if (matrix[i][b] == '^^') res++;
        }
    }
    return res;
}