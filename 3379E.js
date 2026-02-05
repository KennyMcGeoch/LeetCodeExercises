/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 44ms Beats 100.00%
 * Memory 57.49MB Beats 66.67%
 */
var constructTransformedArray = function(nums) {
    let len = nums.length
    let ans = new Array(len)

    for (let i=0; i<len; i++){
        if (nums[i] === 0) ans[i] = 0
        else if (nums[i] > 0) ans[i] = nums[((i + nums[i])% len)]
        else ans[i] = nums[(((i+nums[i])%len)+len) % len]
    }

    return ans
};