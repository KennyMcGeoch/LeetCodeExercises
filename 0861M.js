/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 55 ms, faster than 72.00% of JavaScript online submissions for Score After Flipping Matrix.
 * Memory Usage: 49.4 MB, less than 40.00% of JavaScript online submissions for Score After Flipping Matrix.
 */
var matrixScore = function(grid) {
    
    for (let i=0; i<grid.length; i++){
        if (grid[i][0] === 0){
            for (let j=0; j<grid[i].length; j++){
                if (grid[i][j] === 0) grid[i][j] = 1
                else grid[i][j] = 0
            }
        }
    }
    for (let i=0; i<grid[0].length; i++){
        if (colTot(i) > 0){
            for (let j=0; j<grid.length; j++){
                if (grid[j][i] === 0) grid[j][i] = 1
                else grid[j][i] = 0
            }
        }
    }
    
    function colTot(col){
        let tot = 0
        for (let k=0; k<grid.length; k++){
            if (grid[k][col] === 1) tot--
            else tot++
        }
        return tot
    }
    let total = 0
    let mult = 1
    for (let i=grid[0].length-1; i>-1; i--){
        for (let j=0; j<grid.length; j++){
            total += (grid[j][i] * mult)
        }
        mult *= 2
    }  
    
    return total    
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 58 ms, faster than 52.00% of JavaScript online submissions for Score After Flipping Matrix.
 * Memory Usage: 48.1 MB, less than 96.00% of JavaScript online submissions for Score After Flipping Matrix.
 */
var matrixScore = function(grid) {
    
    for (let i=0; i<grid.length; i++){
        if (grid[i][0] === 0){
            for (let j=0; j<grid[i].length; j++){
                if (grid[i][j] === 0) grid[i][j] = 1
                else grid[i][j] = 0
            }
        }
    }
    for (let i=0; i<grid[0].length; i++){
        grid[0][i] = colTot(i)
    }
    
    function colTot(col){
        let min = 0
        let max = 0
        for (let k=0; k<grid.length; k++){
            if (grid[k][col] === 1) max++
            else min++
        }
        return Math.max(min,max)
    }
    let total = 0
    let mult = 1
    for (let i=grid[0].length-1; i>-1; i--){
        total += (grid[0][i] * mult)
        mult *= 2
    }   
    
    
    return total
    
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 37 ms, faster than 100.00% of JavaScript online submissions for Score After Flipping Matrix.
 * Memory Usage: 49.2 MB, less than 44.00% of JavaScript online submissions for Score After Flipping Matrix.
 */
var matrixScore = function(grid) {
    
    for (let i=0; i<grid.length; i++){
        if (grid[i][0] === 0){
            for (let j=0; j<grid[i].length; j++){
                if (grid[i][j] === 0) grid[i][j] = 1
                else grid[i][j] = 0
            }
        }
    }
    for (let i=0; i<grid[0].length; i++){
        grid[0][i] = colTot(i)
    }
    
    function colTot(col){
        let tot = 0
        for (let k=0; k<grid.length; k++){
            if (grid[k][col] === 1) tot++
        }
        return Math.max(tot, grid.length - tot)
    }
    let total = 0
    let mult = 1
    for (let i=grid[0].length-1; i>-1; i--){
        total += (grid[0][i] * mult)
        mult *= 2
    }   
    
    
    return total
    
};