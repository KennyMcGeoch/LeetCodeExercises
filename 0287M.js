/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 203 ms, faster than 30.71% of JavaScript online submissions for Find the Duplicate Number.
Memory Usage: 56.1 MB, less than 34.45% of JavaScript online submissions for Find the Duplicate Number.
 */
 var findDuplicate = function(nums) {

    let iterations = nums.length
    let valueStore = {}

    for (i=0; i<iterations; i++){
        if (valueStore[nums[i]] === undefined){
            valueStore[nums[i]] = 1
        }
        else{
            return nums[i]
        }
    }
    
};