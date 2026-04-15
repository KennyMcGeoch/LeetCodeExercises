/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 57.20MB Beats 76.67%
 */
var closestTarget = function(words, target, startIndex) {
    let ans = 101

    for (let i=0; i<words.length; i++){
        if (words[i] === target) ans = Math.min(ans, Math.abs(i-startIndex), i+words.length-startIndex, startIndex + words.length - i)
    }
    if (ans === 101) return -1
    return ans
};

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 58.62MB Beats 13.33%
 */
var closestTarget = function(words, target, startIndex) {
    for (let i=0; i<words.length/2 + 1; i++){
        if (words[startIndex-i] === target || words[startIndex+i] === target) return i
        if (i + startIndex >= words.length && words[i+startIndex-words.length] === target) return i
        if (startIndex - i < 0 && words[startIndex+words.length-i] === target) return i
    }
    return -1
};