/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 114 ms, faster than 63.72% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 45.2 MB, less than 13.58% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 */
var removeDuplicates = function(nums) {

    let count = 1;
    let iterations = nums.length
    let previousValue = nums[0]

    for (i=1; i<iterations; i++){
        if (nums[i] !== previousValue){
            nums[count++] = nums[i]
            previousValue = nums[i]
        }
    }

    return count
    
};

