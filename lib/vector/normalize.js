const length = require("./length")

module.exports = function normalize(vec)
{
    let newVec = new Array();
    for(let i = 0; i < vec.length; i++)
    {
        newVec.push(vec[i]/length(vec))
    }
    return newVec;
}