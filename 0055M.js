/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 468 ms, faster than 25.15% of JavaScript online submissions for Jump Game.
 * Memory Usage: 49.4 MB, less than 15.50% of JavaScript online submissions for Jump Game.
 */
 var canJump = function(nums) {

    let minScore = []
    let iterations = nums.length - 1

    minScore = {0:1}

    for (i=0; i<iterations; i++){
        if (minScore[i] !== undefined){
            for (j=1; j<nums[i]+1; j++){
                if (i+nums[i] > iterations){
                    return true
                }
                if (minScore[i+j] === undefined){
                    minScore[i+j] = minScore[i] + 1
                }
                else if (minScore[i+j] > minScore[i]+1){
                    minScore[i+j] = minScore[i] + 1
                }
    
            }
        }
    }
    if (minScore[iterations] === undefined){
        return false
    }
return true

};

canJump([0,2,3] )