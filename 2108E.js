/**
 * @param {string[]} words
 * @return {string}
 * Runtime: 71 ms, faster than 74.44% of JavaScript online submissions for Find First Palindromic String in the Array.
 * Memory Usage: 56.3 MB, less than 36.88% of JavaScript online submissions for Find First Palindromic String in the Array.
 */
var firstPalindrome = function(words) {
    
    for (let i=0; i<words.length; i++) if (words[i] === words[i].split("").reverse().join("")) return words[i]
    
    return ""
    
};

/**
 * @param {string[]} words
 * @return {string}
 * Runtime: 59 ms, faster than 92.28% of JavaScript online submissions for Find First Palindromic String in the Array.
 * Memory Usage: 53.1 MB, less than 44.43% of JavaScript online submissions for Find First Palindromic String in the Array.
 */
var firstPalindrome = function(words) {
    
    for (let i=0; i<words.length; i++) if (rev(words[i])) return words[i]   
    
    function rev(str){
        let l = 0
        let r = str.length-1
        
        while (l < r){
            if (str[l++] !== str[r--]) return false
        }
        return true
    }
    
    return ""
    
};