/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 125 ms, faster than 37.56% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 * Memory Usage: 44 MB, less than 61.93% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 */
 var removeDuplicates = function(nums) {

    let count = 0
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        nums[count] = nums[i]
        if (nums[i] !== nums[i+2])count++
    }

    return count
    
};