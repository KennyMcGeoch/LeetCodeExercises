/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 136 ms, faster than 47.93% of JavaScript online submissions for Two Sum.
 * Memory Usage: 42.7 MB, less than 51.81% of JavaScript online submissions for Two Sum.
 */
var twoSum = function(nums, target) {

    let resultStore = {}

    for (i=0; i<nums.length; i++){
        if (resultStore[nums[i]] !== undefined){
            return [resultStore[nums[i]],i]
        }
        resultStore[target - nums[i]] = i
    }    
};

twoSum([2,7,11,15],9)
