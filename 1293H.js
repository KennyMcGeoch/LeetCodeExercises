/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
 var shortestPath = function(grid, k) {
     
    let shortCircuit = grid.flat().reduce((partialSum, a) => partialSum + a, 0)

    let steps = {}
    let length = grid[0].length
    let width = grid.length
    
    if (k >= shortCircuit) return length + width -2

    maze(0,0,-1,0)

    function maze(i,j,step, wall){
        if (i === -1 || i === width || j === -1 || j === length)return 0

        step++
        let wallT = wall
        if (grid[i][j] === 1)wallT++
        if (wallT > k)return 0

        if (steps[[i,j]] === undefined){
            steps[[i,j]] = {[wallT]:step}
        }
        else if (steps[[i,j]][wallT] === undefined){
            steps[[i,j]][wallT] = step
        }
        else if (steps[[i,j]][wallT] < step)return 0
        else{
            steps[[i,j]][wallT] = step
        }
        return maze(i+1,j,step,wallT) + maze(i-1,j,step,wallT) + maze(i,j+1,step,wallT) + maze(i,j-1,step,wallT)
    }     
     
    width--
    length--
    if (steps[[width,length]] === undefined) return -1
    let solutionArr = Object.values(steps[[width,length]])
    solutionArr.sort((a,b)=>a-b)
    return solutionArr[0]

    
};