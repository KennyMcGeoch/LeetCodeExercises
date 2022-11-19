/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 58 ms, faster than 98.75% of JavaScript online submissions for Check if All A's Appears Before All B's.
 * Memory Usage: 41.8 MB, less than 86.83% of JavaScript online submissions for Check if All A's Appears Before All B's.
 */
 var checkString = function(s) {

    let first = s.indexOf("ba")

    if (first < 0)return true

    return false
};