/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 * Runtime: 46 ms, faster than 85.42% of JavaScript online submissions for Build an Array With Stack Operations.
 * Memory Usage: 41.7 MB, less than 72.92% of JavaScript online submissions for Build an Array With Stack Operations.
 */
var buildArray = function(target, n) {
    
    let ans = []
    let len = 0
    n++
    
    for (let i=1; i<n; i++){
        if (target[len] === i){
            ans.push("Push")
            if (++len === target.length)return ans
        }
        else ans.push("Push","Pop")
    }
    
    return ans
    
};