module.exports = function isVec(arr)
{
    for (let i = 0; i < arr.length; i++)
        if (arr[i].isArray)
            return false;
    return true;
}