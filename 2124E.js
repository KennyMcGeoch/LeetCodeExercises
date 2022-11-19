/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 106 ms, faster than 34.48% of JavaScript online submissions for Check if All A's Appears Before All B's.
 * Memory Usage: 41.9 MB, less than 67.71% of JavaScript online submissions for Check if All A's Appears Before All B's.
 */
 var checkString = function(s) {

    let iterations = s.length
    let first = s.indexOf("b")

    if (first < 0)return true

    for (i=first+1; i<iterations; i++){
        if (s[i] === "a") return false
    }
    return true
};