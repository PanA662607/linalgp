const length = require("./length");

module.exports = function isUnit(vec)
{
    if(length(vec) == 1)
        return true;
    return false;
}