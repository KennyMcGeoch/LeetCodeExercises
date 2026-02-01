/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.93MB Beats 100.00%
 */
var minimumCost = function(nums) {
    let total = nums[0]
    let min = nums[1]
    let minTwo = 51

    for (let i=2; i<nums.length; i++){
        if (nums[i] < min){
            minTwo = min
            min = nums[i]
        }
        else if (nums[i] < minTwo) minTwo = nums[i]
    }

    return total + min + minTwo
};