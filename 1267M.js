/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 5ms Beats 81.48%
 * Memory 51.52MB Beats 96.30%
 */
var countServers = function(grid) {
    let rArr = new Array(grid.length).fill(0)
    let cArr = new Array(grid[0].length).fill(0)
    let ans = 0

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j] === 1){
                rArr[i]++
                cArr[j]++
            }
        }
    }
    
    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j] === 1){
                if (rArr[i] > 1 || cArr[j] > 1) ans++
            }
        }
    }

    return ans
};