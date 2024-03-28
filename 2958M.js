/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 148 ms, faster than 79.65% of JavaScript online submissions for Length of Longest Subarray With at Most K Frequency.
 * Memory Usage: 63.6 MB, less than 95.58% of JavaScript online submissions for Length of Longest Subarray With at Most K Frequency.
 */
var maxSubarrayLength = function(nums, k) {
    
    let count = 0
    let max = 0
    let left = 0
    let hash = {}
    
    for (let i=0; i<nums.length; i++){
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
        count++
        if (hash[nums[i]] > k){
            max = Math.max(max, count-1)
            while(nums[left] !== nums[i]){
                hash[nums[left++]]--
                count--
            }
            hash[nums[left++]]--
            count--
        }
    }
    
    return Math.max(max, count)
    
};