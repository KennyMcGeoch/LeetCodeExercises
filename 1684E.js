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