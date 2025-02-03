module.exports = function isMat(mat)
{
    for(let i = 0; i < mat.length; i++)
    {
        //checks that all rows are of equal length
        if(mat[i].length != mat[0].length)
            return false;
        //checks that matrix is 2d
        for(let j = 0; j < mat[0].length; j++)
        {
            if (Array.isArray(mat[i][j]))
                return false;
        }
    }
    return true;
}