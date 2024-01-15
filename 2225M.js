/**
 * @param {number[][]} matches
 * @return {number[][]}
 * Runtime: 303 ms, faster than 90.97% of JavaScript online submissions for Find Players With Zero or One Losses.
 * Memory Usage: 110.1 MB, less than 80.69% of JavaScript online submissions for Find Players With Zero or One Losses.
 */
 var findWinners = function(matches) {
    
    let solution = [[],[]]
    let hash = {}
    let iterations = matches.length
    
    for (i=0; i<iterations; i++){
        if (hash[matches[i][0]] === undefined) hash[matches[i][0]] = 0
        if (hash[matches[i][1]] === undefined) hash[matches[i][1]] = 1
        else hash[matches[i][1]]++
    }
    
    for (x in hash){
        if (hash[x] < 2)solution[hash[x]].push(x)
    }
    
    return solution
    
};

/**
 * @param {number[][]} matches
 * @return {number[][]}
 * Runtime: 314 ms, faster than 77.88% of JavaScript online submissions for Find Players With Zero or One Losses.
 * Memory Usage: 120.4 MB, less than 45.79% of JavaScript online submissions for Find Players With Zero or One Losses.
 */
var findWinners = function(matches) {
    
    let solution = [[],[]]
    let hash = {}
    let oneLoss = new Set()
    let twoLoss = new Set()
    let iterations = matches.length
    
    for (let i=0; i<iterations; i++){
        hash[matches[i][0]] = true
        hash[matches[i][1]] = true
        if (oneLoss.has(matches[i][1])) twoLoss.add(matches[i][1])
        else oneLoss.add(matches[i][1])
    }
    let arr = Object.keys(hash)
    for (let i=0; i<arr.length; i++){
        let temp = Number(arr[i])
        if (oneLoss.has(temp)){
            if (twoLoss.has(temp) === false)solution[1].push(temp)
            }
        else solution[0].push(temp)
    }
    
    return solution
    
};