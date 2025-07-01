/**
 * @param {string} word
 * @return {number}
 * Runtime 34ms Beats 98.00%
 * Memory 53.48MB Beats 94.00%
 */
var possibleStringCount = function(word) {
    let ans = 1
    let curr = 0
    for (let i=1; i<word.length; i++){
        if (word[i-1] === word[i]) curr++
        else{
            ans += curr
            curr = 0 
        }
    }

    return ans + curr
};

/**
 * @param {string} word
 * @return {number}
 * Runtime 34ms Beats 98.00%
 * Memory 53.34MB Beats 96.00%
 */
var possibleStringCount = function(word) {
    let ans = 1
    for (let i=1; i<word.length; i++){
        if (word[i-1] === word[i]) ans++
    }

    return ans
};