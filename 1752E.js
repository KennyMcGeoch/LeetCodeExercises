/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 48.56MB Beats 88.29%
 */
var check = function(nums) {
    let min = false
    let maxVal = 0

    for (let i=1; i<nums.length; i++){
        if (min){
            if (nums[i] < nums[i-1] || nums[i] > maxVal || nums[i] > nums[0]) return false
        }
        else if (nums[i] < nums[i-1]){
            if (nums[i] > nums[0]) return false
            min = true
            maxVal = nums[i-1]
        }
    }

    return true
};