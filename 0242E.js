/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 180 ms, faster than 14.01% of JavaScript online submissions for Valid Anagram.
Memory Usage: 49.7 MB, less than 6.61% of JavaScript online submissions for Valid Anagram.
 */
 var isAnagram = function(s, t) {
    
    if (s.split('').sort().join('') === t.split('').sort().join('')){
        return true
    }
    
    return false
    
};