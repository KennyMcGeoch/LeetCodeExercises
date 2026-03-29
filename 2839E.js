/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 55.56MB Beats 78.57%
 */
var canBeEqual = function(s1, s2) {
    return ((s1[1] === s2[1] && s1[3] === s2[3]) || (s1[1] === s2[3] && s1[3] === s2[1])) && ((s1[0] === s2[0] && s1[2] === s2[2]) || (s1[0] === s2[2] && s1[2] === s2[0]))
};