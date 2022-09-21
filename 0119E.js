/**
 * @param {number} rowIndex
 * @return {number[]}
 * Runtime: 113 ms, faster than 15.30% of JavaScript online submissions for Pascal's Triangle II.
Memory Usage: 42.1 MB, less than 62.24% of JavaScript online submissions for Pascal's Triangle II.
 */
var getRow = function(rowIndex) {
    let solution = [[1],[1,1]];
    let row = [1]
    let iterations = rowIndex;

    if (rowIndex === 0){
        return [1]
    }

    for (i=1; i<iterations; i++){
        for (j=0; j<solution[i].length-1; j++){
            row[j+1] = solution[i][j] + solution[i][j+1]
        }
        row.push(1)
        solution[i+1] = [...row]
        }

        return solution[rowIndex]
    
};