/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * Runtime: 98 ms, faster than 44.97% of JavaScript online submissions for Merge Strings Alternately.
 * Memory Usage: 42.6 MB, less than 23.91% of JavaScript online submissions for Merge Strings Alternately.
 */
 var mergeAlternately = function(word1, word2) {
    
    let iterations = Math.max(word1.length, word2.length)
    let solution = ""

    for (i=0; i<iterations; i++){
        solution +=  word1.charAt(i)
        solution +=  word2.charAt(i)
    }
    return solution

};



mergeAlternately("aaaa","bbbbb")