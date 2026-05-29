/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.94MB Beats 66.67%
 */
var minElement = function(nums) {
    let min = nums[0]
    let curr = 0

    for (let i=0; i<nums.length; i++){
        curr = 0
        while(nums[i]){
            curr += nums[i] % 10
            nums[i] = Math.floor(nums[i]/10)
        }
        min = Math.min(min,curr)
    }

    return min
};