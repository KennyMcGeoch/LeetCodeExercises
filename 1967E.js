/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.78MB Beats 72.60%
 */
var numOfStrings = function(patterns, word) {
    let ans = 0

    for (let i=0; i<patterns.length; i++) ans += word.includes(patterns[i])

    return ans
};

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.54MB Beats 83.56%
 */
var numOfStrings = function(patterns, word) {
    return patterns.reduce((a,b) => a + word.includes(b),0)
};