module.exports = function subtract(vec1, vec2)
{
    //Checks if vectors have equal lengths
    if(vec1.length != vec2.length)
        throw(new Error("Vectors must be of equal length"));

    //Computes the difference
    let newVec = new Array();
    for (let i = 0; i < vec1.length; i++)
    {
        newVec.push(vec1[i] - vec2[i]);
    }
    return newVec;
}