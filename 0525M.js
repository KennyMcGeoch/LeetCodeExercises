/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 129 ms, faster than 12.12% of JavaScript online submissions for Contiguous Array.
 * Memory Usage: 64.1 MB, less than 8.66% of JavaScript online submissions for Contiguous Array.
 */
var findMaxLength = function(nums) {
    
    let sum = 0
    let max = 0
    let hash = {0:[-1,-1]}
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] === 1) sum++
        else sum--
        
        if (hash[sum] === undefined) hash[sum] = [i,i]
        else hash[sum][1] = i
    }
    
    for (x in hash){
        max = Math.max(max, hash[x][1] - hash[x][0])
    }
    
    return max
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 104 ms, faster than 40.26% of JavaScript online submissions for Contiguous Array.
 * Memory Usage: 59.4 MB, less than 16.45% of JavaScript online submissions for Contiguous Array.
 */
var findMaxLength = function(nums) {
    
    let sum = 0
    let max = 0
    let hash = {0:-1}
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] === 1) sum++
        else sum--
        
        if (hash[sum] === undefined) hash[sum] = i
        else max = Math.max(max, i - hash[sum])
    }
    
    return max
    
};