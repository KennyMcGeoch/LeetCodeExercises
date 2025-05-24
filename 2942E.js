/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 * Runtime 1ms Beats 82.68%
 * Memory 56.26MB Beats 97.08%
 */
var findWordsContaining = function(words, x) {
    let ans = []

    for (let i=0; i<words.length; i++){
        if (words[i].includes(x))ans.push(i)
    }

    return ans
};