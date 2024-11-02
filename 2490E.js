/**
 * @param {string} sentence
 * @return {boolean}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Circular Sentence.
 * Memory Usage: 48.3 MB, less than 99.00% of JavaScript online submissions for Circular Sentence.
 */
var isCircularSentence = function(sentence) {
    sentence = sentence.split(" ")
    if (sentence[0][0] !== sentence[sentence.length-1][sentence[sentence.length-1].length-1]) return false
    
    for (let i=1; i<sentence.length; i++){
        if (sentence[i-1][sentence[i-1].length-1] !== sentence[i][0]) return false
    }
    
    return true
};