/**
 * @param {string} s
 * @return {string}
 * Runtime: 60 ms, faster than 46.15% of JavaScript online submissions for Delete Characters to Make Fancy String.
 * Memory Usage: 75.5 MB, less than 7.00% of JavaScript online submissions for Delete Characters to Make Fancy String.
 */
var makeFancyString = function(s) {
    if (s.length < 3) return s
    let ans = [s[0],s[1]]
    for (let i=2; i<s.length; i++){
        if (s[i] !== ans[ans.length-1] || s[i] !== ans[ans.length-2]) ans.push(s[i])
    }
    return ans.join("")
};