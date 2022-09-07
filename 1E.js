/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 244 ms, faster than 14.47% of JavaScript online submissions for Two Sum.
Memory Usage: 42.2 MB, less than 81.30% of JavaScript online submissions for Two Sum.
 */
 var twoSum = function(nums, target) {
    for (i=0; i<nums.length; i++){
        let targetNo = target - nums[i]
        for (j=i+1; j<nums.length; j++){
            if (nums[j] === targetNo){
                return [i, j]
            }
        }
    }
    
};

twoSum([2,7,11,15],9)