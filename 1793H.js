/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime: 83 ms, faster than 78.57% of JavaScript online submissions for Maximum Score of a Good Subarray.
 * Memory Usage: 53.4 MB, less than 92.86% of JavaScript online submissions for Maximum Score of a Good Subarray.
 */
var maximumScore = function(nums, k) {
    
    let left = k
    let right = k
    let max = nums[k]
    let target = nums[k]
    
    function findMin (target, start){
        if (start === 0)return start
        while(nums[start-1] >= target){
            start--
        }
        return start
    }
    function findMax (target, start){
        if (start === nums.length-1) return start
        while(nums[start+1] >= target){
            start++
        }
        return start
    }
    
    while (left > 0 || right < nums.length-1){
        if (left === 0) target = Math.min(nums[right+1],target)
        else if (right === nums.length-1) target = Math.min(nums[left-1],target)
        else target = Math.min(target, Math.max(nums[left-1], nums[right+1]))
        left = findMin(target, left)
        right = findMax(target,right)
        let temp = (1+right-left) * target
        if (temp > max) max = temp
    }
    
    return max
    
};