/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 45 ms, faster than 94.15% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
 * Memory Usage: 42.7 MB, less than 64.36% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
 */
var findSpecialInteger = function(arr) {
    
    let gap = Math.floor(arr.length/4)
    
    for (let i=0; i<arr.length; i++){
        if (arr[i] === arr[i+gap]) return arr[i]
    }
    
};