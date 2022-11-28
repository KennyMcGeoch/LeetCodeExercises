/**
 * @param {number[][]} matches
 * @return {number[][]}
 * Runtime: 542 ms, faster than 83.56% of JavaScript online submissions for Find Players With Zero or One Losses.
 * Memory Usage: 117 MB, less than 48.95% of JavaScript online submissions for Find Players With Zero or One Losses.
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