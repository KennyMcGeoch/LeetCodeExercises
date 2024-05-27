/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 68 ms, faster than 93.30% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
 * Memory Usage: 42 MB, less than 82.68% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
 * Runtime: 55 ms, faster than 58.33% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
 * Memory Usage: 48.6 MB, less than 95.37% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
 */
 var specialArray = function(nums) {

    let iterations = nums.length
    let count = iterations
    let lastVal = -Infinity

    nums.sort((a,b)=>a-b)

    for (i=0; i<iterations; i++){
        if (nums[i] >= count && count > lastVal)return count
        count--
        lastVal = nums[i]
    }
    
    return -1
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 48 ms, faster than 88.89% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
 * Memory Usage: 48.9 MB, less than 73.15% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
 */
var specialArray = function(nums) {

    nums.sort((a,b)=>a-b)
    
    if (nums[0] >= nums.length) return nums.length
     
    for (i=1; i<nums.length; i++){
        if (nums[i] >= nums.length - i && nums[i-1] < nums.length - i) return nums.length - i
    }
    
    return -1
};