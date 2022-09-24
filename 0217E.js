/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 331 ms, faster than 16.96% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 50.8 MB, less than 63.00% of JavaScript online submissions for Contains Duplicate.
 */
 var containsDuplicate = function(nums) {

    nums.sort()
    let iterations = nums.length - 1

    for (i=0; i<iterations; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }

    return false
    
};