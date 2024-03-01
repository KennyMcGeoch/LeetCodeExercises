/**
 * @param {string} s
 * @return {string}
 * Runtime: 77 ms, faster than 50.82% of JavaScript online submissions for Maximum Odd Binary Number.
 * Memory Usage: 53.4 MB, less than 14.82% of JavaScript online submissions for Maximum Odd Binary Number.
 */
var maximumOddBinaryNumber = function(s) {
    
    let ones = 0
    
    for (let i=0; i<s.length; i++) if (s[i] === "1") ones++
    
    let ans = "1"
    while (--ones > 0) ans += "1"
    while (ans.length < s.length) ans = ans + "0"
    ans += "1"
    
    return ans.slice(1)
    
};

/**
 * @param {string} s
 * @return {string}
 * Runtime: 67 ms, faster than 88.00% of JavaScript online submissions for Maximum Odd Binary Number.
 * Memory Usage: 53.2 MB, less than 18.82% of JavaScript online submissions for Maximum Odd Binary Number.
 */
var maximumOddBinaryNumber = function(s) {
    
    let ones = 0
    
    for (let i=0; i<s.length; i++) if (s[i] === "1") ones++
    
    let ans = ""
    while (--ones > 0) ans += "1"
    while (ans.length < s.length-1) ans = ans + "0"
    ans += "1"
    
    return ans
    
};

/**
 * @param {string} s
 * @return {string}
 * Runtime: 68 ms, faster than 85.88% of JavaScript online submissions for Maximum Odd Binary Number.
 * Memory Usage: 52.3 MB, less than 78.59% of JavaScript online submissions for Maximum Odd Binary Number.
 */
var maximumOddBinaryNumber = function(s) {
    
    s = s.split("").sort((a,b)=>b-a)
    for (let i=0; i<s.length; i++){
        if (s[i] === "0"){
            s[i-1] = 0
            s[s.length-1] = 1
            return s.join("")
        }
    }
    return s.join("")
}