/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (i=0; i<nums.length; i++){
        let TargetNo = target - nums[i]
        console.log(TargetNo);
    }
    
};

twoSum([2,7,11,15],9)