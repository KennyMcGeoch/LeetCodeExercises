/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 56 ms, faster than 86.96% of JavaScript online submissions for Find K-th Smallest Pair Distance.
 * Memory Usage: 50.6 MB, less than 78.26% of JavaScript online submissions for Find K-th Smallest Pair Distance.
 */
var smallestDistancePair = function(nums, k) {
    
    nums.sort((a,b) => a-b)
    
    let len = nums.length
    let ans = 0
    let max = nums[len-1] - nums[0]
    
    for (let cnt = 0; ans < max; cnt = 0){
        let m = Math.floor(ans + (max - ans) / 2)
        for (let i=0, j=0; i<len; i++){
            while (j < len && nums[j] <= nums[i] + m) j++
            cnt += (j - i - 1)
        }
        
        if (cnt < k) ans = m + 1
        else max = m
    }
    
    return ans
    
};
