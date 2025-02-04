const columns = require("./columns")
const isMat = require("./isMat")
const rows = require("./rows.js")

module.exports = function isSquare(mat)
{
    //checks if argument is a valid matrix
    if(!isMat(mat))
        throw(new Error("Argument must be a valid matrix"))

    if(columns(mat) == rows(mat))
        return true;
    return false;
}