/**
 * @param {number[][]} grid
 * @return {boolean}
 * Runtime: 72 ms, faster than 94.62% of JavaScript online submissions for Check if Matrix Is X-Matrix.
 * Memory Usage: 44.6 MB, less than 76.92% of JavaScript online submissions for Check if Matrix Is X-Matrix.
 */
 var checkXMatrix = function(grid) {

    let iterations = grid.length

    for (i=0; i<iterations; i++){
        if (grid[i][i] === 0)return false
        if (grid[i][iterations-(i+1)] === 0)return false
        grid[i][i] = 0
        grid[i][iterations-(i+1)] = 0
    }

    for (i=0; i<iterations; i++){
        for (j=0; j<iterations; j++){
            if (grid[i][j] !== 0)return false
        }
    }

    return true    
};