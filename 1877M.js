/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 288 ms, faster than 58.96% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.
 * Memory Usage: 56 MB, less than 98.84% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.
 */
var minPairSum = function(nums) {
    
    nums.sort((a,b)=>a-b)
    
    let max = nums.length 
    let min = -1
    let ans = 0
    
    while(++min < --max){
        ans = Math.max(ans, nums[min] + nums[max])
    }
    return ans
        
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 260 ms, faster than 99.42% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.
 * Memory Usage: 56.7 MB, less than 68.79% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.
 */
var minPairSum = function(nums) {
    
    nums.sort((a,b)=>a-b)
    
    let loops = nums.length / 2
    let ans = 0
    
    for (let i=0; i<loops; i++){
        ans = Math.max(ans, nums[i] + nums[nums.length-1-i])
    }
    return ans
    
    
    
};