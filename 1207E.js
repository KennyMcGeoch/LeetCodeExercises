/**
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 49 ms, faster than 83.30% of JavaScript online submissions for Unique Number of Occurrences.
 * Memory Usage: 42.9 MB, less than 43.17% of JavaScript online submissions for Unique Number of Occurrences.
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

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    let iterations = arr.length
    let hash = {}
    
    for (i=0; i<iterations; i++)hash[arr[i]] = (hash[arr[i]] || 0) + 1
    
    let hashArr = Object.values(hash)

    return new Set(hashArr).size === hashArr.length 
};

/**
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 44 ms, faster than 95.66% of JavaScript online submissions for Unique Number of Occurrences.
 * Memory Usage: 42.2 MB, less than 81.13% of JavaScript online submissions for Unique Number of Occurrences.
 */
var uniqueOccurrences = function(arr) {
    
    let iterations = arr.length
    let hash = {}
    
    for (i=0; i<iterations; i++)hash[arr[i]] = (hash[arr[i]] || 0) + 1
    
    let hashArr = Object.values(hash)

    return new Set(hashArr).size === hashArr.length 
};