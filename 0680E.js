/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 197 ms, faster than 5.04% of JavaScript online submissions for Valid Palindrome II.
 * Memory Usage: 71.2 MB, less than 5.04% of JavaScript online submissions for Valid Palindrome II.
 */
var validPalindrome = function(s) {

    let rev = s.split("").reverse().join("")
    let del = -1
    let ans = false
    
    for (let i=0; i< s.length; i++){
         if (s[i] !== rev[i]){
             del = i
             i = s.length
         }
    }
    if (del === -1) return true
    else ans = true
    s = s.slice(0, del) + s.slice(del+1)
    let sRev = s.split("").reverse().join("")
    rev = rev.slice(0, del) + rev.slice(del+1)
    let rRev = rev.split("").reverse().join("")
    
    for (let i=0; i<s.length; i++){
        if (s[i] !== sRev[i]){
            ans = false
            i = s.length
        }
    }

    if (ans) return ans
    else ans = true
    for (let i=0; i<s.length; i++){
        if (rev[i] !== rRev[i]){
            ans = false
            i = s.length
        }
    }

    return ans
    
};

/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 62 ms, faster than 89.46% of JavaScript online submissions for Valid Palindrome II.
 * Memory Usage: 54.7 MB, less than 65.16% of JavaScript online submissions for Valid Palindrome II.
 */
var validPalindrome = function(s) {

    let left = 0
    let right = s.length-1
    
    while(left < right){
        if (s[left++] !== s[right--]) return offSet(left-1, right) || offSet(left, right+1)
    }
    
    function offSet(left, right){
        while(left < right){
            if (s[left++] !== s[right--]) return false
        }
        return true
    }
    
    return true
    
};