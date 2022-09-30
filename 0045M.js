/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 262 ms, faster than 26.63% of JavaScript online submissions for Jump Game II.
 * Memory Usage: 45.2 MB, less than 19.50% of JavaScript online submissions for Jump Game II.
 */
 var jump = function(nums) {

    let minScore = []
    let iterations = nums.length - 1

    minScore[0] = 0

    for (i=0; i<iterations; i++){
        for (j=1; j<nums[i]+1; j++){
            if (minScore[i+j] === undefined){
                minScore[i+j] = minScore[i] + 1
            }
            else if (minScore[i+j] > minScore[i]+1){
                minScore[i+j] = minScore[i] + 1
            }

        }
    }

    return minScore[iterations]
    
};

jump([2,3,1,1,4])