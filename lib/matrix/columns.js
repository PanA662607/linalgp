const isMat = require("./isMat")

module.exports = function rows(mat)
{
    //checks if argument is a valid matrix
    if(!isMat(mat))
        throw(new Error("Argument must be a valid matrix"))

    //counts columns
    return mat[0].length;
}