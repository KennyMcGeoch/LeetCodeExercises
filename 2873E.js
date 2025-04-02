/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.91MB Beats 77.03%
 */
var maximumTripletValue = function(nums) {
    let max = nums[0]
    let ans = 0
    let gap = 0

    for (let i=1; i<nums.length; i++){
        ans = Math.max(ans, gap * nums[i])
        gap = Math.max(max-nums[i], gap)
        max = Math.max(max,nums[i])        
    }

    return ans
};