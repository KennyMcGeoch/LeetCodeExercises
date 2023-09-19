/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * Runtime: 50 ms, faster than 83.15% of JavaScript online submissions for Unique Paths II.
 * Memory Usage: 41.8 MB, less than 92.34% of JavaScript online submissions for Unique Paths II.
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let path = 0
    yTarget = obstacleGrid[0].length - 1
    xTarget = obstacleGrid.length - 1
    if (obstacleGrid[xTarget][yTarget] === 1)return 0
    
    let horiz = 1
    for (let i=0; i< obstacleGrid[0].length; i++){
        if (obstacleGrid[0][i] === 1) horiz = 0
        obstacleGrid[0][i] = horiz
    }
    for (let i=1; i<obstacleGrid.length; i++){
        for (let j=0; j< obstacleGrid[0].length; j++){
        if (obstacleGrid[i][j] === 1) {
            obstacleGrid[i][j] = 0
        }
        else if (obstacleGrid[i][j-1] === undefined || obstacleGrid[i][j-1] === 0) obstacleGrid[i][j] = obstacleGrid[i-1][j]
        else    obstacleGrid[i][j] = obstacleGrid[i][j-1] + obstacleGrid[i-1][j]
    }
    }
    return obstacleGrid[xTarget][yTarget]
    
};