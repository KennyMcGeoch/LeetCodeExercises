/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 * Runtime 0ms Beats 100.00%
 * Memory 55.49MB Beats 98.95%
 */
var mapWordWeights = function(words, weights) {
    let curr = 0
    for (let i=0; i<words.length; i++){
        curr = 0
        for (let j=0; j<words[i].length; j++){
            curr += weights[words[i].charCodeAt(j)-97]
        }
        curr %= 26
        words[i] = String.fromCharCode(122-curr)
    }

    return words.join("")
};