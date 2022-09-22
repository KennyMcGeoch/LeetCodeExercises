/**
 * @param {string} s
 * @return {number}
 * Runtime: 117 ms, faster than 7.61% of JavaScript online submissions for Length of Last Word.
Memory Usage: 41.9 MB, less than 64.83% of JavaScript online submissions for Length of Last Word.
 */
 var lengthOfLastWord = function(s) {
    
    let wordSplit = s.split(" ");
    let wordLength = wordSplit.filter(entry => entry.trim() != '');
    
    return wordLength[wordLength.length-1].length
    
};