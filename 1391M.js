/**
 * @param {number[][]} grid
 * @return {boolean}
 * Runtime 260ms Beats 11.11%
 * Memory 92.76MB Beats 11.11%
 */
var hasValidPath = function(grid) {
    let visited = new Set()
    let valid = false

    recur(0,0)

    function recur(x,y){
        if (x === grid.length-1 && y === grid[0].length-1) valid = true
        if (visited.has(x + "," + y) || valid) return
        visited.add(x + "," + y)
        if (grid[x][y] === 2){
            if(x){
                if (grid[x-1][y] === 2 || grid[x-1][y] === 3 || grid[x-1][y] === 4) recur(x-1,y)
            }
            if (x < grid.length-1){
                if (grid[x+1][y] === 2 || grid[x+1][y] === 5 || grid[x+1][y] === 6) recur(x+1,y)
            }
        }
        else if (grid[x][y] === 1){
            if(y){
                if (grid[x][y-1] === 1 || grid[x][y-1] === 4 || grid[x][y-1] === 6) recur(x,y-1)
            }
            if (y < grid[0].length-1){
                if (grid[x][y+1] === 1 || grid[x][y+1] === 3 || grid[x][y+1] === 5) recur(x,y+1)
            }
        }
        else if (grid[x][y] === 6){
            if(x){
                if (grid[x-1][y] === 2 || grid[x-1][y] === 3 || grid[x-1][y] === 4) recur(x-1,y)
            }
            if (y < grid[0].length-1){
                if (grid[x][y+1] === 1 || grid[x][y+1] === 3 || grid[x][y+1] === 5) recur(x,y+1)
            }
        }
        else if (grid[x][y] === 5){
            if(x){
                if (grid[x-1][y] === 2 || grid[x-1][y] === 3 || grid[x-1][y] === 4) recur(x-1,y)
            }
            if(y){
                if (grid[x][y-1] === 1 || grid[x][y-1] === 4 || grid[x][y-1] === 6) recur(x,y-1)
            }
        }
        else if (grid[x][y] === 4){
            if (x < grid.length-1){
                if (grid[x+1][y] === 2 || grid[x+1][y] === 5 || grid[x+1][y] === 6) recur(x+1,y)
            }
            if (y < grid[0].length-1){
                if (grid[x][y+1] === 1 || grid[x][y+1] === 3 || grid[x][y+1] === 5) recur(x,y+1)
            }
        }
        else{
            if(y){
                if (grid[x][y-1] === 1 || grid[x][y-1] === 4 || grid[x][y-1] === 6) recur(x,y-1)
            }
            if (x < grid.length-1){
                if (grid[x+1][y] === 2 || grid[x+1][y] === 5 || grid[x+1][y] === 6) recur(x+1,y)
            }
        }
    }

    return valid
};