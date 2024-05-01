/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 * Runtime: 50 ms, faster than 72.37% of JavaScript online submissions for Reverse Prefix of Word.
 * Memory Usage: 48.6 MB, less than 76.07% of JavaScript online submissions for Reverse Prefix of Word.
 */
var reversePrefix = function(word, ch) {
    
    let first = findFirst()
    
    function findFirst(){
        for (let i=0; i<word.length; i++){
            if (word[i] === ch) return i
        }
        return 0
    }
    if (first === 0) return word
    
    let ans = ""
    for (let i=first; i>-1; i--) ans += word[i]
    
    return ans + word.slice(first+1)
    
};