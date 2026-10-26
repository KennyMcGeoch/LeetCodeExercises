/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 * Runtime 296ms Beats 60.00%
 * Memory 79.00MB Beats 80.00%
 */
var countIslands = function(grid, k) {
    
    let ans = 0
    
    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j]) ans += (recur(i,j)%k === 0)
        }
    }

    function recur(x,y){
        if (x < 0 || y < 0 || x === grid.length || y === grid[0].length) return 0
        if (grid[x][y] === 0) return 0
        let sum = grid[x][y]
        grid[x][y] = 0
        return sum + recur(x+1,y) + recur(x-1,y) + recur(x,y+1) + recur(x,y-1)
    }

    return ans
};

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 * Runtime 40ms Beats 100.00%
 * Memory 78.03MB Beats 93.33%
 */
var countIslands = function(grid, k) {
    
    let ans = 0
    let temp = 0
    
    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j]){
                temp = 0
                recur(i,j)
                if (temp%k === 0) ans++
            }
        }
    }

    function recur(x,y){
        if (x < 0 || y < 0 || x === grid.length || y === grid[0].length) return 0
        if (grid[x][y] === 0) return 0
        temp += grid[x][y]
        grid[x][y] = 0
        return recur(x+1,y) + recur(x-1,y) + recur(x,y+1) + recur(x,y-1)
    }

    return ans
};