/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 48 ms, faster than 85.89% of JavaScript online submissions for Maximum Number of Pairs in Array.
 * Memory Usage: 49.5 MB, less than 20.97% of JavaScript online submissions for Maximum Number of Pairs in Array.
 */
var numberOfPairs = function(nums) {
    
    let hash = {}
    let ans = [0,0]
    
    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1

    for (x in hash){
        ans[0] += Math.floor(hash[x] / 2)
        ans[1] += hash[x] %= 2
    }
    
    return ans
    
};