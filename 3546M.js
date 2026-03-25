/**
 * @param {number[][]} grid
 * @return {boolean}
 * Runtime 47ms Beats 46.15%
 * Memory 88.23MB Beats 23.08%
 */
var canPartitionGrid = function(grid) {
    let row = new Array(grid.length).fill(0)
    let col = new Array(grid[0].length).fill(0)

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            row[i] += grid[i][j]
            col[j] += grid[i][j]
        }
    }

    let target = row.reduce((a,b)=>a+b) / 2
    let curr = 0
    for (let i=0; i<row.length; i++){
        curr += row[i]
        if (curr === target) return true
        else if (curr > target) i = row.length
    }
    curr = 0
    for (let i=0; i<col.length; i++){
        curr += col[i]
        if (curr === target) return true
        else if (curr > target) i = col.length
    }
    return false
};