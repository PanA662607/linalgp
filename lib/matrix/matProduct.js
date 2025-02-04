const { dot } = require("../vector/index.js")
const columns = require("./columns")
const isMat = require("./isMat")
const rows = require("./rows.js")

module.exports = function matProduct(mat1,mat2)
{
    //checks if arguments are valid matrices
    if(!isMat(mat1) || !isMat(mat2))
        throw(new Error("Arguments must be valid matrices"))
    //checks if matrices are compatible
    if(columns(mat1) != rows(mat2))
        throw(new Error("Matrix 1 must have the same number of columns as Matrix 2 has rows"))

    newMat = new Array();
    for(let i = 0; i < rows(mat1); i++)
    {
        let newRow = [];
        for(let j = 0; j < columns(mat2); j++)
        {
            let sum = 0;
            for(let k = 0; k < rows(mat1); k++)
            {
                sum += mat1[i][k] * mat2[k][j];
            }
            newRow.push(sum);
        }
        newMat.push(newRow)
    }
    return newMat;
}