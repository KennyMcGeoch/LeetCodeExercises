/**
 * @param {number[][]} grid
 * @return {number[][]}
 * Runtime 8ms Beats 86.67%
 * Memory 62.87MB Beats 100.00%
 */
var sortMatrix = function(grid) {
    let curr = []

    for (let i=0; i<grid.length; i++){
        for (let j=0; j+i<grid.length; j++) curr.push(grid[i+j][j])
        curr.sort((a,b)=> a-b)
        for (let j=0; j+i<grid.length; j++) grid[i+j][j] = curr.pop()
    }
    for (let i=0; i<grid.length; i++){
        for (let j=0; j+i<grid.length-1; j++) curr.push(grid[j][i+j+1])
        curr.sort((a,b)=> b-a)
        for (let j=0; j+i<grid.length-1; j++) grid[j][i+j+1] = curr.pop()
    }

    return grid
};