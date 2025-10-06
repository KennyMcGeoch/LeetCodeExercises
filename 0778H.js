/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 244ms Beat 8.51%
 * Memory 55.80MB Beats 100.00%
 */
var swimInWater = function(grid) {
    let hasVisit = new Array(grid.length)
    let best = new Array(grid.length)
    for (let i=0; i<grid.length; i++){
        hasVisit[i] = new Array(grid.length).fill(false)
        best[i] = new Array(grid.length).fill(2501)
    }

    function recur(x,y,curr){
        if (x < 0 || y < 0 || x == grid.length || y == grid.length) return
        curr = Math.max(curr, grid[x][y])
        if (hasVisit[x][y] === false){
            hasVisit[x][y] = true
            best[x][y] = Math.max(curr, grid[x][y])
        }
        else if (best[x][y] <= curr) return
        else best[x][y] = curr
        recur(x+1,y,curr)
        recur(x,y+1,curr)
        recur(x-1,y,curr)
        recur(x,y-1,curr)
        return
    }
    recur(0,0,0)
    return best[grid.length-1][grid.length-1]
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 89ms Beats 21.28%
 * Memory 58.01MB Beats 100.00%
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    let hasVisit = new Array(grid.length)
    let best = new Array(grid.length)
    for (let i=0; i<grid.length; i++){
        hasVisit[i] = new Array(grid.length).fill(false)
        best[i] = new Array(grid.length).fill(2501)
    }

    function recur(x,y,curr){
        if (x < 0 || y < 0 || x == grid.length || y == grid.length) return
        curr = Math.max(curr, grid[x][y])
        if (curr >= best[grid.length-1][grid.length-1]) return
        if (hasVisit[x][y] === false){
            hasVisit[x][y] = true
            best[x][y] = Math.max(curr, grid[x][y])
        }
        else if (best[x][y] <= curr) return
        else best[x][y] = curr
        recur(x,y+1,curr)
        recur(x,y-1,curr)
        recur(x+1,y,curr)
        recur(x-1,y,curr)
        return
    }
    recur(0,0,0)
    return best[grid.length-1][grid.length-1]
};