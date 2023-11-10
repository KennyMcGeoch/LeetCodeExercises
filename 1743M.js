/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 * Runtime: 407 ms, faster than 46.38% of JavaScript online submissions for Restore the Array From Adjacent Pairs.
 * Memory Usage: 128.8 MB, less than 55.07% of JavaScript online submissions for Restore the Array From Adjacent Pairs.
 */
var restoreArray = function(adjacentPairs) {
    if (adjacentPairs.length === 1)return adjacentPairs[0]
    
    let hash = {}
    
    for (let i=0; i<adjacentPairs.length; i++){
        if (hash[adjacentPairs[i][0]] === undefined)hash[adjacentPairs[i][0]] = [adjacentPairs[i][1]]
        else hash[adjacentPairs[i][0]].push(adjacentPairs[i][1])
        if (hash[adjacentPairs[i][1]] === undefined)hash[adjacentPairs[i][1]] = [adjacentPairs[i][0]]
        else hash[adjacentPairs[i][1]].push(adjacentPairs[i][0])
    }
    
    function start(obj) {
        for (arr in obj){
            if (obj[arr].length === 1) return arr
        }
    }
    let first = start(hash)
    let prev = start(hash)
    let ans = [first]
    let target = adjacentPairs.length + 1
    
    
    while(ans.length < target){
        for (let i=0; i<2; i++){
            if (hash[first][i] != prev){
                ans.push(hash[first][i])
                prev = first
                first = hash[first][i]
                i = 2
            }
        }
    }
    
    return ans
    
};