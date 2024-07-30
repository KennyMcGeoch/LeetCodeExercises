/**
 * @param {string} s
 * @return {number}
 * Runtime: 94 ms, faster than 50.00% of JavaScript online submissions for Minimum Deletions to Make String Balanced.
 * Memory Usage: 55.7 MB, less than 40.91% of JavaScript online submissions for Minimum Deletions to Make String Balanced.
 */
var minimumDeletions = function(s) {
    
    let aCount = 0
    let bCount = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "a") aCount++
    }
    
    let ans = aCount
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "a") aCount--
        else bCount++
        ans = Math.min(ans, aCount+bCount)
    }
    return ans
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 90 ms, faster than 59.09% of JavaScript online submissions for Minimum Deletions to Make String Balanced.
 * Memory Usage: 55.3 MB, less than 72.73% of JavaScript online submissions for Minimum Deletions to Make String Balanced.
 */
var minimumDeletions = function(s) {
    
    let aCount = 0
    let bCount = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "a") aCount++
    }
    
    let ans = aCount
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "a") aCount--
        else bCount++
        ans = Math.min(ans, aCount+bCount)
        if (ans < bCount) return ans
    }
    return ans
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 74 ms, faster than 95.45% of JavaScript online submissions for Minimum Deletions to Make String Balanced.
 * Memory Usage: 55.1 MB, less than 81.82% of JavaScript online submissions for Minimum Deletions to Make String Balanced.
 */
var minimumDeletions = function(s) {
    
    let bCount = 0
    let ans = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "b") bCount++
        else if (bCount){
            ans++
            bCount--
        }
    }
    return ans
    
};