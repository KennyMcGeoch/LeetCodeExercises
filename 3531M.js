/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 * Runtime 55ms Beats 100.00%
 * Memory 104.33MB Beats 80.00%
 */
var countCoveredBuildings = function(n, buildings) {
    let xMin = new Array(n+1).fill(Infinity)
    let xMax = new Array(n+1).fill(0)
    let yMin = new Array(n+1).fill(Infinity)
    let yMax = new Array(n+1).fill(0)
    let ans = 0

    for (let i=0; i<buildings.length; i++){
        if (xMin[buildings[i][1]] > buildings[i][0]) xMin[buildings[i][1]] = buildings[i][0]
        if (xMax[buildings[i][1]] < buildings[i][0]) xMax[buildings[i][1]] = buildings[i][0]
        if (yMin[buildings[i][0]] > buildings[i][1]) yMin[buildings[i][0]] = buildings[i][1]
        if (yMax[buildings[i][0]] < buildings[i][1]) yMax[buildings[i][0]] = buildings[i][1]
    }

    for (let i=0; i<buildings.length; i++){
        if (buildings[i][0] !== xMin[buildings[i][1]] && 
        buildings[i][0] !== xMax[buildings[i][1]] &&
        buildings[i][1] !== yMin[buildings[i][0]] &&
        buildings[i][1] !== yMax[buildings[i][0]]) ans++
    }

    return ans
};