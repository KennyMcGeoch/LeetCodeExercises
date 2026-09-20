/**
 * @param {string} s
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.22MB Beats 86.90%
 */
var reverseDegree = function(s) {
    let ans = 0

    for (let i=0; i<s.length; i++) ans += ((123-s.charCodeAt(i))*(i+1))

    return ans
};