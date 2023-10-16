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

/**
 * @param {number} rowIndex
 * @return {number[]}
 * Runtime: 51 ms, faster than 58.99% of JavaScript online submissions for Pascal's Triangle II.
 * Memory Usage: 42.2 MB, less than 34.31% of JavaScript online submissions for Pascal's Triangle II.
 */
var getRow2 = function(rowIndex) {
    let solution = [1]
    if (rowIndex === 0) return solution
    let loops = Math.ceil(rowIndex/2) + 1
    
    for (let i=1; i<loops; i++){
        solution.push(solution[i-1] * (rowIndex - i + 1)/i)
    }
     
     loops = Math.floor(rowIndex/2) - 1
     
     for (let i=loops; i>-1; i--){
         solution.push(solution[i])
     }
     
     return solution    
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 * Runtime: 37 ms, faster than 98.94% of JavaScript online submissions for Pascal's Triangle II.
 * Memory Usage: 41.9 MB, less than 54.33% of JavaScript online submissions for Pascal's Triangle II.
 */
var getRow3 = function(rowIndex) {
    let solution = [1]
    if (rowIndex === 0) return solution
    for (let i=1; i<rowIndex; i++){
        solution.push(solution[i-1] * (rowIndex - i + 1)/i)
    }
     solution.push(1)
     return solution
    
};