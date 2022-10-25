/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 61 ms, faster than 94.84% of JavaScript online submissions for House Robber.
 * Memory Usage: 42.1 MB, less than 32.69% of JavaScript online submissions for House Robber.
 */
 var rob = function(nums) {

    let iterations = nums.length

    if (iterations === 1) return nums[0]
    else if (iterations === 2) return Math.max(nums[0],nums[1])

    let totalTheft = [nums[0],nums[1],nums[2]+nums[0]]

    for (i=3; i<iterations; i++){
        totalTheft.push(Math.max(totalTheft[i-2],totalTheft[i-3])+nums[i])
    }

    return Math.max(totalTheft[iterations-1],totalTheft[iterations-2])
    
};