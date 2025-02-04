const isVec = require("./isVec")

module.exports = function dot(vec1, vec2)
{
    //Checks that both vectors are of equal dimension
    if (vec1.length != vec2.length)
        throw(new Error("Vectors must have equal lengths"))
    //Evaluates dot product
    let sum = 0;

    for(let i = 0; i < vec1.length; i++)
        sum += vec1[i] * vec2[i];

    return sum;
}