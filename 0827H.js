/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 271ms Beats 28.85%
 * Memory 87.16MB Beats 15.81%
 */
var largestIsland = function(grid) {
    let tot = [0,0]
    let ans = 0
    let curr = 0
    let zero = []
    let yLen = grid[0].length
    let count = 2

    function recur(x,y){
        if (x < 0 || y < 0 || x === grid.length || y === yLen) return
        if (grid[x][y] !== 1) return
        curr++
        grid[x][y] = count
        return recur(x+1,y) + recur(x-1,y) + recur(x,y+1) + recur(x,y-1)
    }

    function calc(x,y){
        let val = 1
        let has = []
        if (x > 0) has.push(grid[x-1][y])
        if (y > 0 && has.includes(grid[x][y-1]) === false) has.push(grid[x][y-1])
        if (x+1 < grid.length && has.includes(grid[x+1][y]) === false) has.push(grid[x+1][y])
        if (y+1 < yLen && has.includes(grid[x][y+1]) === false) has.push(grid[x][y+1])
        for (let i=0; i<has.length; i++) val += tot[has[i]]
        return val
    }

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<yLen; j++){
            if (grid[i][j] === 0) zero.push([i,j])
            else if (grid[i][j] === 1){
                curr = 0
                recur(i,j)
                ans = Math.max(curr,ans)
                count++
                tot.push(curr)
            }
        }
    }

    for (let i=0; i<zero.length; i++) ans = Math.max(ans, calc(zero[i][0],zero[i][1]))

    return ans
};