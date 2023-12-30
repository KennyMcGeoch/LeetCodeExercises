/**
 * @param {string[]} words
 * @return {boolean}
 * Runtime: 100 ms, faster than 7.04% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
 * Memory Usage: 45.5 MB, less than 32.39% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
 */
var makeEqual = function(words) {
    
    let hash = {}
    let str = words.length
    
    for (let i=0; i<str; i++){
        for (let j=0; j<words[i].length; j++){
            if (hash[words[i][j]] === undefined) hash[words[i][j]] = 1
            else hash[words[i][j]]++
        }
    }
    for (letter in hash) if (hash[letter] % str !== 0) return false
    return true
};

/**
 * @param {string[]} words
 * @return {boolean}
 * Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
 * Memory Usage: 43 MB, less than 100.00% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
 */
var makeEqual = function(words) {
    
    if (words.length === 1) return true
    
    let hash = new Array(26).fill(0)
    let str = words.length
    
    for (let i=0; i<str; i++){
        for (let j=0; j<words[i].length; j++){
            hash[words[i].charCodeAt(j) - 97]++
        }
    }
    for (let i=0; i<26; i++){
        if (hash[i] % str !== 0) return false
    }
    return true
};