/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 * Runtime: 78 ms, faster than 95.30% of JavaScript online submissions for Top K Frequent Words.
 * Memory Usage: 44.7 MB, less than 87.29% of JavaScript online submissions for Top K Frequent Words.
 */
 var topKFrequent = function(words, k) {

    let occurances = {}

    for (i=0; i<words.length; i++){
        if (occurances[words[i]] === undefined){
            occurances[words[i]] = 1
        }
        else{
            occurances[words[i]]++
        }
    }

    let valArray = Object.keys(occurances).sort().sort(function(a, b){return occurances[b]-occurances[a]})
    
    return valArray.slice(0,k)    
};