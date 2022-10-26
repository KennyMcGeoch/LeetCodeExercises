/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 68 ms, faster than 93.30% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
 * Memory Usage: 42 MB, less than 82.68% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
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