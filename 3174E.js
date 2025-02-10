/**
 * @param {string} s
 * @return {string}
 * Runtime 1ms Beats 92.00%
 * Memory 51.22MB Beats 66.80%

 */
var clearDigits = function(s) {
    let ans = []

    for (let i=0; i<s.length; i++){
        if (s.charCodeAt(i) > 60) ans.push(s[i])
        else ans.pop()
    }

    return ans.join("")
};