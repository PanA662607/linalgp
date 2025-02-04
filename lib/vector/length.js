module.exports = function length(vec)
{
    let sum = 0;
    for (let i = 0; i < vec.length; i++)
        sum += vec[i]**2;
    return sum**(0.5);
}