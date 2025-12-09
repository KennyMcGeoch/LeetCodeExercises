/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 447ms Beats 18.18%
 * Memory 90.45MB Beat s90.91%
 */
var specialTriplets = function(nums) {
    let prev = new Map()
    let next = new Map()
    let ans = 0

    for (let i=1; i<nums.length; i++) next[nums[i]] = (next[nums[i]] || 0) + 1
    prev[nums[0]] = 1
    for (let i=1; i<nums.length-1; i++){
        next[nums[i]]--
        ans += ((prev[nums[i]*2] || 0) * (next[nums[i]*2] || 0))
        prev[nums[i]] = (prev[nums[i]] || 0) + 1
        ans %= 1000000007
    }
    return ans
};