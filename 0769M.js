/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Max Chunks To Make Sorted.
 * Memory Usage: 48 MB, less than 97.74% of JavaScript online submissions for Max Chunks To Make Sorted.
 */
var maxChunksToSorted = function(arr) {
    let segs = 0
    let count = 0
    let sum = 0
    
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
        count += i
        if (count === sum) segs++
    }
    
    return segs
};

/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Max Chunks To Make Sorted.
 * Memory Usage: 48.3 MB, less than 91.29% of JavaScript online submissions for Max Chunks To Make Sorted.
 */
var maxChunksToSorted = function(arr) {
    let segs = 0
    let sum = 0
    
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
        sum -= i
        if (sum === 0) segs++
    }
    
    return segs
};