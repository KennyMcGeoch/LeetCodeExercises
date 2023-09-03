/**
 * @param {string} s
 * @return {string}
 * Runtime: 88 ms, faster than 62.14% of JavaScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 43 MB, less than 89.76% of JavaScript online submissions for Longest Palindromic Substring.
 */
var longestPalindrome = function(s) {
    
    if (s.length < 2)return s
    let maxTemp = 0
    let ans = ""
    
    for (let i=0; i<s.length; i++){
        let temp = 0
        while( s[i-temp] === s[i+temp] && (i-temp) > -1){
            temp++
        }
        if (temp > maxTemp){
            maxTemp = temp
            let min = i - --temp
            let max = i + temp + 1
            ans = s.slice(min, max)
        }
        temp = 0
        while( s[i-temp] === s[i+temp-1] && (i-temp) > -1){
            temp++
        }
        if (temp > maxTemp){
            maxTemp = temp - 0.5
            let min = i - --temp
            let max = i + temp
            ans = s.slice(min, max)
        }
        
    }
    return ans
    
};