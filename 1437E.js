/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 60.85MB Beats 79.69%
 */
var kLengthApart = function(nums, k) {
    let count = k

    for (let i=0; i<nums.length; i++){
        if (nums[i] === 1){
            if (count < k) return false
            count = 0
        }
        else count++
    }
    return true
};