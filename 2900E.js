/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 * Runtime 0ms Beats 100.00%
 * Memory 57.06MB Beats 85.86%
 */
var getLongestSubsequence = function(words, groups) {
    let ans = [words[0]]
    let curr = groups[0]

    for (let i=0; i<words.length; i++){
        if (groups[i] !== curr){
            ans.push(words[i])
            curr = groups[i]
        }
    }

    return ans
};