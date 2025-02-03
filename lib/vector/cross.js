module.exports = function cross(vec1, vec2)
{
    if(vec1.length != 3 || vec2.length != 3)
        throw(new Error("linalgp currently only supports cross products in R^3"));

    let i = (vec1[1]*vec2[2]) - (vec1[2] * vec2[1]);
    let j = (vec1[2]*vec2[0]) - (vec1[0] * vec2[2]);
    let k = (vec1[0]*vec2[1]) - (vec1[1] * vec2[0]);
    return [i,j,k];
}