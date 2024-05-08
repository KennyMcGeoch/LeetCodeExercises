/**
 * @param {number[]} score
 * @return {string[]}
 * Runtime: 95 ms, faster than 54.11% of JavaScript online submissions for Relative Ranks.
 * Memory Usage: 44.7 MB, less than 76.49% of JavaScript online submissions for Relative Ranks.
 */
var findRelativeRanks = function(score) {
    
    let pos = [...score].sort((a,b)=>b-a)
    pos.unshift(-1)
    for (let i=0; i<score.length; i++){
        let temp = pos.indexOf(score[i])
        if (temp === 1) score[i] = "Gold Medal"
        else if (temp === 2) score[i] = "Silver Medal"
        else if (temp === 3) score[i] = "Bronze Medal"
        else score[i] = temp.toString()
    }
    return score
    
};

/**
 * @param {number[]} score
 * @return {string[]}
 * Runtime: 61 ms, faster than 95.97% of JavaScript online submissions for Relative Ranks.
 * Memory Usage: 51.8 MB, less than 92.74% of JavaScript online submissions for Relative Ranks.
 */
var findRelativeRanks = function(score) {
    
    let pos = [...score].sort((a,b)=>b-a)
    let hash = {}
    for (let i=0; i<score.length; i++){
        if (i > 2) hash[pos[i]] = [i+1].toString()
        else if (i === 0) hash[pos[i]] = "Gold Medal"
        else if (i === 1) hash[pos[i]] = "Silver Medal"
        else if (i === 2) hash[pos[i]]= "Bronze Medal"
    }
    for (let i=0; i< score.length; i++) score[i] = hash[score[i]]
    return score

    
};