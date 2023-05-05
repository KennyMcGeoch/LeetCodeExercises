/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 * Runtime: 61 ms, faster than 39.62% of JavaScript online submissions for Filter Elements from Array.
 * Memory Usage: 42.4 MB, less than 13.12% of JavaScript online submissions for Filter Elements from Array.
 */
var filter = function(arr, fn) {
    let arrNew = []
    for (let i=0; i<arr.length; i++){
        if (fn(arr[i],i))arrNew.push(arr[i])
    }
    return arrNew
    
};