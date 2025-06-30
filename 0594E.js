/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 49ms Beats 26.58%
 * Memory 64.33MB Beats 71.78%
 */
var findLHS = function(nums) {
    let ans = 0
    hash = {}

    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1

    for (x in hash){
        if (hash[Number(x)+1]) ans = Math.max(ans, hash[x] + (hash[Number(x)+1]))
    }

    return ans
};