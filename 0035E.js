/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime: 97 ms, faster than 38.32% of JavaScript online submissions for Search Insert Position.
Memory Usage: 42 MB, less than 82.62% of JavaScript online submissions for Search Insert Position.
 */
 var searchInsert = function(nums, target) {

    for (i=0; i<nums.length; i++){
        if (nums[i] === target || nums[i] > target){
            return i
        }


    }

    return nums.length
    
};
