/**
 * @param {string} sentence
 * @return {boolean}
 * Runtime: 79 ms, faster than 81.48% of JavaScript online submissions for Check if the Sentence Is Pangram.
 * Memory Usage: 42.9 MB, less than 53.44% of JavaScript online submissions for Check if the Sentence Is Pangram.
 */
 var checkIfPangram = function(sentence) {

    let iterations = sentence.length

    if (iterations < 26)return false

    let letterPresent = {} 

    for (i=0; i<iterations; i++){
        if (letterPresent[sentence[i]] === undefined){
            letterPresent[sentence[i]] = true
        }
    }
    
    if (Object.keys(letterPresent).length === 26) return true

    return false
};