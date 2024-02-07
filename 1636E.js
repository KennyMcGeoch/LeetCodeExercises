/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 65 ms, faster than 67.14% of JavaScript online submissions for Sort Array by Increasing Frequency.
 * Memory Usage: 51.1 MB, less than 27.56% of JavaScript online submissions for Sort Array by Increasing Frequency.
 */
var frequencySort = function(nums) {
    
    let hash = {}
    
    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1
    
    nums.sort((a,b)=> hash[a] === hash[b] ? b-a : hash[a] - hash[b])
    
    return nums
    
};