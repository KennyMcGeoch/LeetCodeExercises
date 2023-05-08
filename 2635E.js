/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 * Runtime: 46 ms, faster than 97.29% of JavaScript online submissions for Apply Transform Over Each Element in Array.
 * Memory Usage: 41.8 MB, less than 70.07% of JavaScript online submissions for Apply Transform Over Each Element in Array.
 */
var map = function(arr, fn) {
    
    let newArr = []
    let loops = arr.length
    
    for (i=0; i<loops; i++){
        newArr[i] = fn(arr[i],i)
    }
    return newArr
    
};