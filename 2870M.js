/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 129 ms, faster than 51.28% of JavaScript online submissions for Minimum Number of Operations to Make Array Empty.
 * Memory Usage: 54.1 MB, less than 66.67% of JavaScript online submissions for Minimum Number of Operations to Make Array Empty.
 */
var minOperations = function(nums) {
    
    let hash = {}
    let ans = 0
    
    for (let i=0; i<nums.length; i++){
        if (hash[nums[i]] === undefined) hash[nums[i]] = 1
        else hash[nums[i]]++
    }
    
    for (x in hash){
        if (hash[x] === 1)return -1
        else ans += (Math.ceil(hash[x] / 3))
    }
    
    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 128 ms, faster than 51.28% of JavaScript online submissions for Minimum Number of Operations to Make Array Empty.
 * Memory Usage: 53.5 MB, less than 87.18% of JavaScript online submissions for Minimum Number of Operations to Make Array Empty.
 */
var minOperations = function(nums) {
    
    let hash = {}
    let ans = 0
    
    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1
    
    for (x in hash){
        if (hash[x] === 1)return -1
        else ans += (Math.ceil(hash[x] / 3))
    }
    
    return ans
    
};