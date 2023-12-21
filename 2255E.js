/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 * Runtime: 55 ms, faster than 57.92% of JavaScript online submissions for Count Prefixes of a Given String.
 * Memory Usage: 42.6 MB, less than 53.85% of JavaScript online submissions for Count Prefixes of a Given String.
 */
var countPrefixes = function(words, s) {
    
    let ans = 0
    
    for (let i=0; i<words.length; i++){
        if (words[i] === s.slice(0, words[i].length)) ans++
    }
    
    return ans
};

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 * Runtime: 45 ms, faster than 95.47% of JavaScript online submissions for Count Prefixes of a Given String.
 * Memory Usage: 43.2 MB, less than 29.41% of JavaScript online submissions for Count Prefixes of a Given String.
 */
var countPrefixes = function(words, s) {
    
    let ans = 0
    
    let arr = []
    let temp = ""
    for (let i=0; i<s.length; i++){
        temp += s[i]
        arr.push(temp)
    }
    
    for (let i=0; i<words.length; i++){
        if (arr.includes(words[i])) ans++
    }
    
    return ans
};