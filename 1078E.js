/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 * Runtime: 84 ms, faster than 68.61% of JavaScript online submissions for Occurrences After Bigram.
 * Memory Usage: 41.7 MB, less than 86.86% of JavaScript online submissions for Occurrences After Bigram.
 */
 var findOcurrences = function(text, first, second) {

    let temp = text.split(" ")
    let solution = []
    let iterations = temp.length
    
    for (i=0; i<iterations-2; i++){
        if (temp[i] === first && temp[i+1] === second){
            solution.push(temp[i+2])
        }
    }   
    return solution
 }