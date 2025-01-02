/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime 10ms Beats 71.43%
 * Memory 79.18MB Beats 38.78%
 */
var vowelStrings = function(words, queries) {
    let hash = [0]
    let ans = []

    function isVowel(str){
        if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") return true
        return false
    }

    for (let i=0; i<words.length; i++){
        if (isVowel(words[i][0]) && isVowel(words[i][words[i].length-1])) hash.push(hash[i]+1)
        else hash.push(hash[i])
    }
    for (let i=0; i<queries.length; i++){
        ans.push(hash[queries[i][1]+ 1]-hash[queries[i][0]])
    }
    return ans
};

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime 5ms Beats 91.84%
 * Memory 77.30MB Beats 69.39%
 */
var vowelStrings = function(words, queries) {
    let hash = [0]
    let ans = []
    let isVowel = new Set(["a","e","i","o","u"])

    for (let i=0; i<words.length; i++){
        if (isVowel.has(words[i][0]) && isVowel.has(words[i][words[i].length-1])) hash.push(hash[i]+1)
        else hash.push(hash[i])
    }
    for (let i=0; i<queries.length; i++){
        ans.push(hash[queries[i][1]+ 1]-hash[queries[i][0]])
    }
    return ans
};