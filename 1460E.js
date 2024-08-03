/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
  * Runtime: 44 ms, faster than 100.00% of JavaScript online submissions for Make Two Arrays Equal by Reversing Subarrays.
 * Memory Usage: 50.2 MB, less than 96.11% of JavaScript online submissions for Make Two Arrays Equal by Reversing Subarrays.
 */
var canBeEqual = function(target, arr) {
    let hash = {}
    for (let i=0; i<target.length; i++) hash[target[i]] = (hash[target[i]] || 0) + 1
    for (let i=0; i<arr.length; i++){
        if (hash[arr[i]] === undefined) return false
        else if (hash[arr[i]]-- === 0) return false
    }
    return true
    
};

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 52 ms, faster than 97.78% of JavaScript online submissions for Make Two Arrays Equal by Reversing Subarrays.
 * Memory Usage: 50.7 MB, less than 86.67% of JavaScript online submissions for Make Two Arrays Equal by Reversing Subarrays.
 */
var canBeEqual = function(target, arr) {
    target.sort((a,b)=>a-b)
    arr.sort((a,b)=>a-b)
    for (let i=0; i<arr.length; i++){
        if (arr[i] !== target[i]) return false
    }
    return true
    
};