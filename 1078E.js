/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 * Runtime: 89 ms, faster than 62.04% of JavaScript online submissions for Occurrences After Bigram.
 * Memory Usage: 42.1 MB, less than 25.55% of JavaScript online submissions for Occurrences After Bigram.
 */
 var findOcurrences = function(text, first, second) {

    let temp = text.split(" ")
    let solution = []
    let iterations = temp.length
    let startVal = 0
    
    for (i=0; i<iterations-2; i++){
        if (temp[i] === first && temp[i+1] === second){
            solution.push(temp[i+2])
        }
    }   
    return solution
 }