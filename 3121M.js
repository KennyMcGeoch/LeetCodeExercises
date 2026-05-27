/**
 * @param {string} word
 * @return {number}
 * Runtime 52ms Beats 100.00%
 * Memory 60.54MB Beats 97.30%
 */
var numberOfSpecialChars = function(word) {
    let arr = new Array(58).fill(0)
    let ans = 0
    arr[word.charCodeAt(0)-65] = -1

    for (let i=1; i<word.length; i++){
        if (word.charCodeAt(i)-91 > 0){
            arr[word.charCodeAt(i)-65] = i
        }
        else if (arr[word.charCodeAt(i)-65] === 0){
            arr[word.charCodeAt(i)-65] = i
        }
    }

    for (let i=0; i<26; i++){
        if (arr[i] && arr[i+32] && arr[i] > arr[i+32]) ans++
    }

    return ans
};