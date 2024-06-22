/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 93 ms, faster than 41.95% of JavaScript online submissions for Count Number of Nice Subarrays.
 * Memory Usage: 64.1 MB, less than 33.17% of JavaScript online submissions for Count Number of Nice Subarrays.
 */
var numberOfSubarrays = function(nums, k) {
    
    let ans = 0
    let count = {0:1}
    let odd = 0
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] % 2 === 1) odd++
        count[odd] = (count[odd] || 0) + 1
    }
    
    for (x in count){
        if (count[Number(x)+k] !== undefined){
            ans += (count[Number(x)+k] * count[x])
        }
    }
    return ans
    
};