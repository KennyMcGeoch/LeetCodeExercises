/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * Runtime: 78 ms, faster than 88.06% of JavaScript online submissions for Count the Number of Consistent Strings.
 * Memory Usage: 59 MB, less than 13.99% of JavaScript online submissions for Count the Number of Consistent Strings.
 */
var countConsistentStrings = function(allowed, words) {
    
    let ans = 0
    allowed = allowed.split("")
    
    for (let i=0; i<words.length; i++){
        ans += check(words[i])
    }
    
    function check(str){
        for (let j=0; j<str.length; j++)if (allowed.includes(str[j]) === false) return 0
        return 1
    }
    
    return ans
    
};

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * Runtime: 73 ms, faster than 93.53% of JavaScript online submissions for Count the Number of Consistent Strings.
 * Memory Usage: 59.2 MB, less than 41.32% of JavaScript online submissions for Count the Number of Consistent Strings.
 */
var countConsistentStrings = function(allowed, words) {
    
    let ans = 0
    let allowedSet = new Set()
    
    for (let i=0; i<allowed.length; i++) allowedSet.add(allowed[i])
    
    for (let i=0; i<words.length; i++){
        ans += check(words[i])
    }
    
    function check(str){
        for (let j=0; j<str.length; j++)if (allowedSet.has(str[j]) === false) return 0
        return 1
    }
    
    return ans
    
};

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * Runtime: 77 ms, faster than 84.30% of JavaScript online submissions for Count the Number of Consistent Strings.
 * Memory Usage: 57.8 MB, less than 92.29% of JavaScript online submissions for Count the Number of Consistent Strings.
 */
var countConsistentStrings = function(allowed, words) {
    
    let ans = 0
    let allowedSet = new Set(allowed)
    
    for (let i=0; i<words.length; i++){
        ans += check(words[i])
    }
    
    function check(str){
        for (let j=0; j<str.length; j++)if (allowedSet.has(str[j]) === false) return 0
        return 1
    }
    
    return ans
    
};