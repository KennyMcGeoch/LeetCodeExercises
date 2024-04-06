/**
 * @param {string} s
 * @return {string}
 * Runtime: 63 ms, faster than 94.65% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
 * Memory Usage: 56.1 MB, less than 88.48% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
 */
var minRemoveToMakeValid = function(s) {
    
    let remain = 0
    let curr = 0
    let ans = ""
    
    for (let i=0; i<s.length; i++) if (s[i] === ")") remain++
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "("){
            if (remain > curr){
                ans += s[i]
                curr++
            }
        }
        else if (s[i] === ")"){
            remain--
            if (curr > 0){
                ans += s[i]
                curr--
            }
        }
        else ans += s[i]
    }
    
    return ans
    
};