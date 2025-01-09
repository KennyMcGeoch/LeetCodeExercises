/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 50.94MB Beats 38.51%
 */
var prefixCount = function(words, pref) {
    let ans = 0
    for (let i=0; i<words.length; i++){
        if (words[i].slice(0,pref.length) === pref) ans++
    }
    return ans
};