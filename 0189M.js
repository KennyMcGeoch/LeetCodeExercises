/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 97 ms, faster than 56.66% of JavaScript online submissions for Rotate Array.
 * Memory Usage: 52.9 MB, less than 32.83% of JavaScript online submissions for Rotate Array.
 */
var rotate = function(nums, k) {
    let len = nums.length
    while (k > len){
        k -= len
    }
    let Arr = nums.slice(len - k).concat(nums.slice(0, len-k))
    for (i=0; i<nums.length; i++){
        nums[i] = Arr[i]
    }
    return
    
    
};