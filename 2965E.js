/**
 * @param {number[][]} grid
 * @return {number[]}
 * Runtime 2ms Beats 93.44%
 * Memory 57.69MB Beats 21.31%
 */
var findMissingAndRepeatedValues = function(grid) {
    let val = 0
    let dupe = true
    let hash = new Set()

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (dupe && hash.has(grid[i][j])){
                 val = grid[i][j]
                 dupe = false
            }
            else hash.add(grid[i][j])
        }
    }
    let curr = 0
    while(true){
        if (hash.has(++curr) === false) return [val,curr]
    }
};