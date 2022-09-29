/**
 * @param {string} s
 * @return {number}
 * Runtime: 91 ms, faster than 73.85% of JavaScript online submissions for Consecutive Characters.
 * Memory Usage: 44.5 MB, less than 12.84% of JavaScript online submissions for Consecutive Characters.
 */
 var maxPower = function(s) {

    let nums = s.split("")
    let count = 1
    let maxCount = 1
    let iterations = nums.length - 1

    for (i=0; i<iterations; i++){
        if (nums[i] === nums[i+1]){
            count++
            if (count>maxCount){
                maxCount = count
            }
        }
        else{
            count = 1
        }
    }

    return maxCount
};