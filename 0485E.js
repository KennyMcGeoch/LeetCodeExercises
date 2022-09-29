/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 118 ms, faster than 35.22% of JavaScript online submissions for Max Consecutive Ones.
Memory Usage: 44.9 MB, less than 31.16% of JavaScript online submissions for Max Consecutive Ones.
 */
 var findMaxConsecutiveOnes = function(nums) {

    let count = 0
    let maxCount = 0
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        if (nums[i] === 1){
            count++
            if (count>maxCount){
                maxCount = count
            }
        }
        else{
            count = 0
        }
    }

    return maxCount
    
};