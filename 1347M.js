/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * Runtime: 117 ms, faster than 77.91% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
 * Memory Usage: 48 MB, less than 41.28% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
 */
var minSteps = function(s, t) {
    
    let hash = {}
    let ans = 0
    
    for (let i=0; i<s.length; i++) hash[s[i]] = (hash[s[i]] || 0) + 1
    
    for (let i=0; i<s.length; i++) if (hash[t[i]] !== undefined) hash[t[i]]--
    
    for (x in hash) if (hash[x] > 0) ans+= hash[x]
    
    return ans
    
};