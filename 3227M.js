/**
 * @param {string} s
 * @return {boolean}
 * Runtime 8ms Beats 72.73%
 * Memory 58.67MB Beats 90.91%
 */
let vowel = new Set(["a","e","i","o","u"])
var doesAliceWin = function(s) {
    for (let i=0; i<s.length; i++){
        if (vowel.has(s[i])) return true
    }
    return false
};

/**
 * @param {string} s
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 58.42MB Beats 100.00%
 */
var doesAliceWin = function(s) {
    for (let i=0; i<s.length; i++){
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") return true
    }
    return false
};