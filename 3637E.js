/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 55.56MB Beats 69.23%
 */
var isTrionic = function(nums) {
    if (nums[1] <= nums[0]) return false
    let start = 0

    for (let i=2; i<nums.length; i++){
        if (nums[i] === nums[i-1]) return false
        if (nums[i] < nums[i-1]){
            start = i
            i = nums.length
        }
    }
    if (start === 0) return false
    let term = start
    for (let i=start; i<nums.length; i++){
        if (nums[i] === nums[i-1]) return false
        if (nums[i] > nums[i-1]){
            start = i
            i = nums.length
        }
    }
    if (start === term) return false
    for (let i=start; i<nums.length; i++){
        if (nums[i] <= nums[i-1]) return false
    }

    return true
};