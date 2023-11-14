/**
 * @param {string} s
 * @return {number}
 * Runtime: 431 ms, faster than 87.91% of JavaScript online submissions for Unique Length-3 Palindromic Subsequences.
 * Memory Usage: 55.5 MB, less than 8.79% of JavaScript online submissions for Unique Length-3 Palindromic Subsequences.
 */
var countPalindromicSubsequence = function(s) {
    
    let hashMin = {}
    let hashMax = {}
    let ans = 0
    
    for (let i=0; i<s.length; i++){
        if (hashMin[s[i]] === undefined){
            hashMin[s[i]] = i
        }
        else hashMax[s[i]] = i
    }
    
    for (let i=0; i<s.length; i++){
        if (hashMax[s[i]] === undefined)continue
        else if (hashMin[s[i]] === i){
            let temp = s.slice(hashMin[s[i]]+1, hashMax[s[i]]).split("")
            temp = new Set(temp)
            ans += temp.size
        }
    }
    return ans
    
};