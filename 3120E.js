/**
 * @param {string} word
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.93MB Beats 93.55%
 */
var numberOfSpecialChars = function(word) {
    let arr = new Array(58).fill(0)
    let ans = 0

    for (let i=0; i<word.length; i++){
        arr[word.charCodeAt(i)-65]++
    }

    for (let i=0; i<26; i++){
        if (arr[i] && arr[i+32]) ans++
    }

    return ans
};