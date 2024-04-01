/**
 * @param {string} s
 * @return {number}
 * Runtime: 117 ms, faster than 7.61% of JavaScript online submissions for Length of Last Word.
 * Memory Usage: 41.9 MB, less than 64.83% of JavaScript online submissions for Length of Last Word.
 * Runtime: 38 ms, faster than 98.28% of JavaScript online submissions for Length of Last Word.
 * Memory Usage: 48.9 MB, less than 37.17% of JavaScript online submissions for Length of Last Word.
 */
 var lengthOfLastWord = function(s) {
    
    let wordSplit = s.split(" ");
    let wordLength = wordSplit.filter(entry => entry.trim() != '');
    
    return wordLength[wordLength.length-1].length
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 46 ms, faster than 83.49% of JavaScript online submissions for Length of Last Word.
 * Memory Usage: 49.1 MB, less than 25.24% of JavaScript online submissions for Length of Last Word.
 */
var lengthOfLastWord = function(s) {
    
    let len = 0
    
    for (let i=s.length-1; i>-1;i--){
        if (s[i] !== " ")len++
        if (len && s[i] === " ") return len
    }
     
     return len
    
};