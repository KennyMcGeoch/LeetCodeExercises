/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 132 ms, faster than 66.15% of JavaScript online submissions for Least Number of Unique Integers after K Removals.
 * Memory Usage: 80.4 MB, less than 50.77% of JavaScript online submissions for Least Number of Unique Integers after K Removals.
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    
    if (k === arr.length) return 0
    else if (k === arr.length-1) return 1
    
    let hash = {}
    
    for (let i=0; i<arr.length; i++) hash[arr[i]] = (hash[arr[i]] || 0) + 1
    
    arr = Object.values(hash).sort((a,b)=>a-b)
    
    for (let i=0; i<arr.length; i++){
        k -= arr[i]
        if (k < 0) return arr.length - i
    }
    
    return 0
    
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 138 ms, faster than 62.56% of JavaScript online submissions for Least Number of Unique Integers after K Removals.
 * Memory Usage: 79.7 MB, less than 53.85% of JavaScript online submissions for Least Number of Unique Integers after K Removals.
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    
    if (k === arr.length) return 0
    else if (k === arr.length-1) return 1
    
    let hash = {}
    
    for (let i=0; i<arr.length; i++) hash[arr[i]] = (hash[arr[i]] || 0) + 1
    
    arr = Object.values(hash).sort((a,b)=>b-a)
    
    while (k > 0){
        k -= arr.pop()
    }
    if (k < 0) return arr.length+1
    
    return arr.length
    
};