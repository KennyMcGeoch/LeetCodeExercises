/**
 * @param {string} s
 * @return {number}
 * Runtime: 14 ms, faster than 68.75% of JavaScript online submissions for Find Longest Special Substring That Occurs Thrice I.
 * Memory Usage: 55 MB, less than 73.68% of JavaScript online submissions for Find Longest Special Substring That Occurs Thrice I.
 */
var maximumLength = function(s) {
    let hash = {}
    
    for (let i=0; i<s.length; i++){
        let str = s[i]
        hash[str] = (hash[str] || 0) + 1
        for (let j=i+1; j<s.length; j++){
            if (s[j] === s[i]){
                str += s[j]
                hash[str] = (hash[str] || 0) + 1
            }
            else j = s.length
        }
    }

    let ans = -1
    
    for (x in hash){
        if (hash[x] > 2) ans = Math.max(ans, x.length)
    }
    
    return ans
};