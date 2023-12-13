/**
 * @param {number[][]} grid
 * @return {number[][]}
 * Runtime: 254 ms, faster than 100.00% of JavaScript online submissions for Difference Between Ones and Zeros in Row and Column.
 * Memory Usage: 92.6 MB, less than 100.00% of JavaScript online submissions for Difference Between Ones and Zeros in Row and Column.
 */
var onesMinusZeros = function(grid) {
    
    let row = {}
    let col = {}
    
    for (let i=0; i<grid.length; i++){
        let temp = 0
        for (let j=0; j<grid[i].length; j++){
            if (grid[i][j] === 1) temp++
            else temp--
        }
        row[i] = temp
    }
    for (let i=0; i<grid[0].length; i++){
        let temp = 0
        for (let j=0; j<grid.length; j++){
            if (grid[j][i] === 1) temp++
            else temp--
        }
        col[i] = temp
    }
    
    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[i].length; j++){
            grid[i][j] = row[i] + col[j]
        }
    }
    
    return grid
    
};

/**
 * @param {number[][]} grid
 * @return {number[][]}
 * Runtime: 244 ms, faster than 100.00% of JavaScript online submissions for Difference Between Ones and Zeros in Row and Column.
 * Memory Usage: 92.9 MB, less than 100.00% of JavaScript online submissions for Difference Between Ones and Zeros in Row and Column.
 */
var onesMinusZeros = function(grid) {
    
    let row = []
    let col = []
    
    for (let i=0; i<grid.length; i++){ 
        let temp = 0
        for (let j=0; j<grid[i].length; j++){
            if (grid[i][j] === 1) temp++
            else temp--
        }
        row.push(temp)
    }
    for (let i=0; i<grid[0].length; i++){ 
        let temp = 0
        for (let j=0; j<grid.length; j++){
            if (grid[j][i] === 1) temp++
            else temp--
        }
        col.push(temp)
    }
    
    for (let i=0; i<grid.length; i++){ 
        for (let j=0; j<grid[i].length; j++){
            grid[i][j] = row[i] + col[j]
        }
    }
    
    return grid
    
};