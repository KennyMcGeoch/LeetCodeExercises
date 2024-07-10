/**
 * @param {string[]} logs
 * @return {number}
 * Runtime: 50 ms, faster than 82.64% of JavaScript online submissions for Crawler Log Folder.
 * Memory Usage: 49.3 MB, less than 66.53% of JavaScript online submissions for Crawler Log Folder.
 */
var minOperations = function(logs) {
    
    let depth = 0
    
    for (let i=0; i<logs.length; i++){
        if (logs[i] === "./") continue
        else if (logs[i] === "../") depth = Math.max(depth-1, 0)
        else depth++
    }
    
    return depth
    
};