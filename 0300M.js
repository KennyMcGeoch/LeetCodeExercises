/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 533 ms, faster than 5.49% of JavaScript online submissions for Longest Increasing Subsequence.
 * Memory Usage: 43.7 MB, less than 67.82% of JavaScript online submissions for Longest Increasing Subsequence.
 */
var lengthOfLIS = function(nums) {
    
    let hash = {}
    
    for (let i=nums.length-1; i>-1; i--){
        let temp = nums[i]
        for (let j=i+1; j<nums.length; j++){
            if (nums[j] > temp){
                if (hash[i]) hash[i] = Math.max(hash[i], hash[j]+1)
                else hash[i] = (hash[j] || 0) + 1
            }
        }
        if (!hash[i]) hash[i] = 1
    }
    return Math.max(...Object.values(hash))
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 316 ms, faster than 9.40% of JavaScript online submissions for Longest Increasing Subsequence.
 * Memory Usage: 43.7 MB, less than 67.82% of JavaScript online submissions for Longest Increasing Subsequence.
 */
var lengthOfLIS = function(nums) {
    
    let hash = {}
    let max = 1
    
    for (let i=nums.length-1; i>-1; i--){
        for (let j=i+1; j<nums.length; j++){
            if (nums[j] > nums[i]){
                if (hash[i]){ 
                    if (hash[i] <= hash[j]) {
                        hash[i] = hash[j]+1
                        if (hash[i] > max){
                        max++
                        j = nums.length
                        }
                    }
                }
                else {
                    hash[i] = (hash[j]) + 1
                    if (hash[i] > max){
                        max++
                        j = nums.length
                    }
                }
            }
        }
        if (!hash[i]) hash[i] = 1
    }
    
    return max
    
};