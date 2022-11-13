/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 103 ms, faster than 29.24% of JavaScript online submissions for Find Peak Element.
 * Memory Usage: 42.4 MB, less than 26.54% of JavaScript online submissions for Find Peak Element.
 */
 var findPeakElement = function(nums) {
    let iterations = nums.length
    if (iterations === 1)return 0

    for (i=1; i<iterations; i++){
        if (nums[i] > nums[i+1]){
            if (nums[i] > nums[i-1])return i
            else i++
        }
    }
    if (nums[iterations-1] > nums[iterations-2])return iterations-1
    return 0
};