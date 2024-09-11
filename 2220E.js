/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 * Runtime: 54 ms, faster than 53.62% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
 * Memory Usage: 49.6 MB, less than 11.59% of JavaScript online submissions for Minimum Bit Flips to Convert Number.
 */
var minBitFlips = function(start, goal) {
    
    let changes = 0
    let init = Math.ceil(Math.log(Math.max(start, goal))/Math.log(2))
    init = 2 ** init
    
    while(init > 0.5 && start !== goal){
        if (start < init != goal < init) changes++
        if (start >= init) start -= init
        if (goal >= init) goal -= init
        init /= 2
    }
        
    return changes
    
};