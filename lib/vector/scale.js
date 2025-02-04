module.exports = function scale (vec, scale)
{
    let newVec = new Array();
    for (let i = 0; i < vec.length; i++)
    {
        newVec.push(vec[i]*scale);
    }
    return newVec;
}