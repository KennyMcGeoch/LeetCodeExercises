/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 240 ms, faster than 67.05% of JavaScript online submissions for Island Perimeter.
 * Memory Usage: 50.1 MB, less than 83.46% of JavaScript online submissions for Island Perimeter.
 */
 var islandPerimeter = function(grid) {

    let iterationsX = grid.length
    let iterationsY = grid[0].length
    let perimeter = 0

    for (i=0; i<iterationsX; i++){
        for (j=0; j<iterationsY; j++){
            if (grid[i][j] === 1){
                if (i === iterationsX - 1 || grid[i+1][j] === 0 || grid[i+1][j] === undefined){
                    perimeter++
                }
                if (i === 0 || grid[i-1][j] === 0 || grid[i-1][j] === undefined){
                    perimeter++
                }
                if (j === iterationsY -1 || grid[i][j+1] === 0 || grid[i][j+1] === undefined){
                    perimeter++
                }
                if (j === 0 || grid[i][j-1] === 0 || grid[i][j-1] === undefined){
                    perimeter++
                }
            }
        }
    }
    return perimeter
    
};

islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])