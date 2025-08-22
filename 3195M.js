/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 98ms Beats 64.71%
 * Memory 88.13MB Beats 58.82%
 */
var minimumArea = function(grid) {
    let xMin = 1000
    let xMax = 0
    let yMin = 1000
    let yMax = 0

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j]){
                xMax = i
                if (xMin > i) xMin = i
                if (yMax < j) yMax = j
                if (yMin > j) yMin = j
            }
        }
    }

    return (xMax + 1 - xMin) * (yMax +1 - yMin)
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 95ms Beats 70.59%
 * Memory 87.48MB Beats 94.12%
 */
var minimumArea = function(grid) {
    let xMin = 1000
    let xMax = 0
    let yMin = 1000
    let yMax = 0
    let xMinPlace = true

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j]){
                xMax = i
                if (xMinPlace){
                     xMin = i
                     xMinPlace = false
                }
                if (yMax < j) yMax = j
                if (yMin > j) yMin = j
            }
        }
    }

    return (xMax + 1 - xMin) * (yMax +1 - yMin)
};

/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime 70ms Beats 100.00%
 * Memory 87.32MB Beats 100.00%
 */
var minimumArea = function(grid) {
    let xMin = 0
    let xMax = 0
    let yMin = 0
    let yMax = 0

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j]){
                xMin = i
                i = grid.length
                j = grid[0].length
            }
        }
    }
    for (let i=0; i<grid[0].length; i++){
        for (let j=0; j<grid.length; j++){
            if (grid[j][i]){
                yMin = i
                i = grid[0].length
                j = grid.length
            }
        }
    }
    for (let i=grid.length-1; i>-1; i--){
        for (let j=0; j<grid[0].length; j++){
            if (grid[i][j]){
                xMax = i
                i = -1
                j = grid[0].length
            }
        }
    }
    for (let i=grid[0].length-1; i>-1; i--){
        for (let j=0; j<grid.length; j++){
            if (grid[j][i]){
                yMax = i
                i = -1
                j = grid.length
            }
        }
    }

    return (xMax + 1 - xMin) * (yMax +1 - yMin)
};