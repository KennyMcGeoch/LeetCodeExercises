/**
 * @param {number[][]} matches
 * @return {number[][]}
 * Runtime: 752 ms, faster than 55.59% of JavaScript online submissions for Find Players With Zero or One Losses.
 * Memory Usage: 110.1 MB, less than 63.98% of JavaScript online submissions for Find Players With Zero or One Losses.
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
    
    solution[0].sort((a,b)=> a-b)
    solution[1].sort((a,b)=> a-b)
    
    return solution
    
};