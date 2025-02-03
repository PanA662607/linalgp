module.exports = function add(vec1, vec2)
{
    //Checks if vector lengths are equal
    if (vec1.length != vec2.length)
        throw(new Error("Both vectors must be of equal length"));
    //Evaluates the sum of the two vectors
    let newVec = new Array()
    for (let i = 0; i < vec1.length; i++)
    {
        newVec.push(vec1[1] + vec2[i]);
    }
    return newVec;
}