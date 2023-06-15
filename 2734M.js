/**
 * @param {string} s
 * @return {string}
 * Runtime: 220 ms, faster than 73.26% of JavaScript online submissions for Lexicographically Smallest String After Substring Operation.
 * Memory Usage: 83.5 MB, less than 60.46% of JavaScript online submissions for Lexicographically Smallest String After Substring Operation.
 */
var smallestString = function(s) {
    
    let changes = false
    let ans = ""
    let sub = s.length
    for (i=0; i<s.length; i++){
        if (s[i] === "a"){
            if (changes){
                sub = i
                i = s.length
            }
            else ans += s[i]
        }
        else{
            ans += nextChar(s[i])
            changes = true
        }
    }
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }
    if (changes === false){
        return s.substring(0,s.length-1) + "z"
    }
    return ans+= s.substring(sub)
};