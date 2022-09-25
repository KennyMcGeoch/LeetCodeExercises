/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime: 143 ms, faster than 82.92% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 61.2 MB, less than 71.53% of JavaScript online submissions for Contains Duplicate II.
 */
 var containsNearbyDuplicate = function(nums, k) {

    let iterations = nums.length
    let storedVal = {}

    for (i=0; i<iterations; i++){
        if (storedVal[nums[i]] === null){
            storedVal[nums[i]] = i
        }
        else if(i - storedVal[nums[i]] <= k){
            return true
        }
        else{
            storedVal[nums[i]] = i
        }
    }

    return false
    
};