/**
 * @param {number[][]} moveTime
 * @return {number}
 * Runtime 1114ms Beats 27.27%
 * Memory 61.85MB Beats 81.82%
 */
var minTimeToReach = function(moveTime) {
    let hash = new Array(moveTime.length)
    let yLen = moveTime[0].length
    for (let i=0; i<hash.length; i++){
        hash[i] = new Array(moveTime[0].length)
    }
    hash[0][0] = 0

    function recur(x,y,curr){
        if (invalidX(x) || invalidY(y)) return
        curr = Math.max(curr, moveTime[x][y]) + 1
        if (hash[x][y] === undefined) hash[x][y] = curr
        else if (hash[x][y] <= curr) return
        else hash[x][y] = curr
        return recur(x+1,y,curr) + recur(x-1,y,curr) + recur(x,y+1,curr) + recur(x,y-1,curr)
    }

    function invalidX(x){
        if (x < 0 || x === moveTime.length) return true
        else return false
    }

    function invalidY(y){
        if (y < 0 || y === yLen) return true
        else return false
    }

    recur(1,0,0)
    recur(0,1,0)

    return hash[moveTime.length-1][yLen-1]
};