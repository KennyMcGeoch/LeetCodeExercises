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

/**
 * @param {string} s
 * @return {number}
 * Runtime: 378 ms, faster than 91.21% of JavaScript online submissions for Unique Length-3 Palindromic Subsequences.
 * Memory Usage: 55.1 MB, less than 8.79% of JavaScript online submissions for Unique Length-3 Palindromic Subsequences.
 */
var countPalindromicSubsequence = function(s) {
    
    let hashMax = {}
    let ans = 0
    
    for (let i=0; i<s.length; i++){
        hashMax[s[i]] = i
    }
    
    for (let i=0; i<s.length; i++){
        if (hashMax[s[i]] === undefined)continue
        else if (hashMax[s[i]] !== i){
            let temp = s.slice(i+1, hashMax[s[i]]).split("")
            temp = new Set(temp)
            ans += temp.size
            hashMax[s[i]] = undefined
        }
    }
    return ans
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime 263ms Beats 95.74%
 * Memory 61.77MB Beats 8.51%
 */
var countPalindromicSubsequence = function(s) {
    
    let hashMax = {}
    let ans = 0
    
    for (let i=0; i<s.length; i++){
        if (hashMax[s[i]] === undefined) hashMax[s[i]] = [i,0]
        else hashMax[s[i]][1] = i
    }
    
    for (x in hashMax){
        if (hashMax[x][1] === 0)continue
        else {
            let temp = s.slice(hashMax[x][0]+1, hashMax[x][1]).split("")
            temp = new Set(temp)
            ans += temp.size
        }
    }
    return ans
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime 369ms Beats 16.36%
 * Memory 57.85MB Beats 100.00%
 */
var countPalindromicSubsequence = function(s) {
    
    let hashMin = {}
    let hashMax = {}
    let ans = 0
    let set
    
    for (let i=0; i<s.length; i++){
        if (hashMin[s[i]] === undefined) hashMin[s[i]] = i+1
        else hashMax[s[i]] = i
    }
    
    for (x in hashMax){
        set = new Set()
        for (let i=hashMin[x]; i<hashMax[x]; i++) set.add(s[i])
        ans += set.size
    }
    return ans
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime 63ms Beats 78.18%
 * Memory 59.67MB Beats 85.45%
 */
var countPalindromicSubsequence = function(s) {
    
    let hashMin = new Array(26).fill(Infinity)
    let hashMax = new Array(26).fill(-1)
    let ans = 0
    let set
    
    for (let i=0; i<s.length; i++){
        if (hashMin[s.charCodeAt(i)-97] === Infinity) hashMin[s.charCodeAt(i)-97] = i+1
        else hashMax[s.charCodeAt(i)-97] = i
    }
    
    for (x in hashMax){
        set = new Array(26).fill(0)
        for (let i=hashMin[x]; i<hashMax[x]; i++) set[s.charCodeAt(i)-97] = 1
        ans += set.reduce((a,b)=>a+b)
    }
    return ans
    
};