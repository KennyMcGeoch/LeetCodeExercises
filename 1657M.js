/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * Runtime: 128 ms, faster than 82.80% of JavaScript online submissions for Determine if Two Strings Are Close.
 * Memory Usage: 48.9 MB, less than 81.87% of JavaScript online submissions for Determine if Two Strings Are Close.
 */
var closeStrings = function(word1, word2) {
    
    let iterations = word1.length
    if (word2.length !== iterations) return false
    
    let hashOne = {}
    let hashTwo = {}
    
    function hashWord(hash, word){
        for (let i=0; i<iterations; i++) hash[word[i]] = (hash[word[i]] || 0) + 1
    }
    
    hashWord(hashOne, word1)
    hashWord(hashTwo, word2)
    
    for (x in hashOne) if (hashTwo[x] === undefined) return false
    
    let arrOne = Object.values(hashOne)
    let arrTwo = Object.values(hashTwo)
    if (arrOne.length !== arrTwo.length) return false
    arrOne.sort((a,b)=>a-b)
    arrTwo.sort((a,b)=>a-b)
    
    for (let i=0; i<arrOne.length; i++){
        if (arrOne[i] !== arrTwo[i])return false
    }
    
    return true
    
};