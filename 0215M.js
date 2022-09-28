/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 203 ms, faster than 57.96% of JavaScript online submissions for Kth Largest Element in an Array.
Memory Usage: 51.5 MB, less than 50.27% of JavaScript online submissions for Kth Largest Element in an Array.
 */
 var findKthLargest = function(nums, k) {

    nums.sort(function(a, b){return b-a})
        
    return sortedNums[k-1]
    
};