/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 * Runtime: 67 ms, faster than 71.17% of JavaScript online submissions for Binary Subarrays With Sum.
 * Memory Usage: 55.9 MB, less than 32.51% of JavaScript online submissions for Binary Subarrays With Sum.
 */
var numSubarraysWithSum = function(nums, goal) {
    
    let total = 0
    if (goal === 0){
        let i = 0
        let count = 0
        while(i < nums.length){
            if (nums[i++] === 0){
                total += ++count
            }
            else count = 0
        }
        return total
    }
    let freq = {0:1}
    
    for (let i=1; i<nums.length;i++) nums[i] += nums[i-1]
    
    for (let i=0; i<nums.length; i++) freq[nums[i]] = (freq[nums[i]] || 0) + 1
    
    for (x in freq){
        total += (freq[x] * (freq[x-goal] || 0))
    }
    
    return total
};