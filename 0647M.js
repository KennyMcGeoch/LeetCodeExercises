/**
 * @param {string} s
 * @return {number}
 * Runtime: 55 ms, faster than 89.27% of JavaScript online submissions for Palindromic Substrings.
 * Memory Usage: 51.4 MB, less than 23.17% of JavaScript online submissions for Palindromic Substrings.
 */
var countSubstrings = function(s) {
    
    let ans = s.length
    
    for (let i=0; i<s.length; i++){
        count(i-1,i+1)
    }
    for (let i=0; i<s.length; i++){
        count(i, i+1)
    }
    
    function count(min,max){
        while(min > -1 && s[min] === s[max]){
            ans++
            min--
            max++
        }
        return
    }
    
    return ans
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 55 ms, faster than 89.27% of JavaScript online submissions for Palindromic Substrings.
 * Memory Usage: 52.3 MB, less than 21.46% of JavaScript online submissions for Palindromic Substrings.
 */
var countSubstrings = function(s) {
    
    let ans = s.length
    
    for (let i=0; i<s.length; i++){
        count(i-1,i+1)
        count(i, i+1)
    }
    
    function count(min,max){
        while(min > -1 && s[min] === s[max]){
            ans++
            min--
            max++
        }
        return
    }
    
    return ans
    
};