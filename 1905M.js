/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 * Runtime: 118 ms, faster than 88.03% of JavaScript online submissions for Count Sub Islands.
 * Memory Usage: 68.3 MB, less than 75.21% of JavaScript online submissions for Count Sub Islands.
 */
var countSubIslands = function(grid1, grid2) {
    
    let islands = 0
    
    for (let i=0; i<grid1.length; i++){
        for (let j=0; j<grid1[0].length; j++){
            grid1[i][j] = grid1[i][j] && grid2[i][j]
        }
    }
    
    for (let i=0; i<grid1.length; i++){
        for (let j=0; j<grid1[0].length; j++){
            if (grid2[i][j] === 1){
                islands += recur(i,j)
            }
            
        }
    }
    
    function recur(x,y){
        if (x < 0 || y < 0 || x === grid1.length || y === grid1[0].length) return 1
        if (grid2[x][y] !== 1) return 1
        if (grid1[x][y] === 0) return 0
        grid2[x][y] = 2
            
        return Math.min(recur(x+1,y), recur(x-1,y), recur(x,y+1), recur(x,y-1))
    }
    
    return islands
    
};