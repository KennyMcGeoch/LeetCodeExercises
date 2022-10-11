/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 93 ms, faster than 75.98% of JavaScript online submissions for Increasing Triplet Subsequence.
 * Memory Usage: 54.7 MB, less than 23.42% of JavaScript online submissions for Increasing Triplet Subsequence.
 */
 var increasingTriplet = function(nums) {

    let iterations = nums.length
    let minVal
    let minNums = new Set(nums).size
    if (minNums < 3) return false

    for (i=0; i<iterations-1; i++){
        if (nums[i] < nums[i+1]){
            minVal = nums[i]
            for (j=i; j < iterations; j++){
                if (minVal === nums[i] && nums[j]>nums[i]){
                    minVal = nums[j]
                }
                else if (nums[j] < minVal && nums[j] > nums[i]){
                    minVal = nums[j]
                }
                else if (nums[j] > minVal){
                    return true
                }
            }
        }
    }
    return false    
};

increasingTriplet([2,1,5,0,4,6])