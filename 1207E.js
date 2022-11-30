/**
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 111 ms, faster than 19.60% of JavaScript online submissions for Unique Number of Occurrences.
 * Memory Usage: 42.7 MB, less than 46.04% of JavaScript online submissions for Unique Number of Occurrences.
 */
 var uniqueOccurrences = function(arr) {
    
    let iterations = arr.length
    let hash = {}
    
    for (i=0; i<iterations; i++){
        if (hash[arr[i]] === undefined) hash[arr[i]] = 1
        else hash[arr[i]]++
    }
    
    let hashArr = Object.values(hash)
    if (new Set(hashArr).size !== hashArr.length)return false
    return true    
};