/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 158 ms, faster than 21.25% of JavaScript online submissions for Missing Number.
Memory Usage: 44.6 MB, less than 37.20% of JavaScript online submissions for Missing Number.
 */
 var missingNumber = function(nums) {

    let sortedNums = nums.sort(function(a, b){return a - b});

    for (i=0; i> -1; i++){
        if (sortedNums[i] !== i){
            return i
        }
    }

    return
    
};
