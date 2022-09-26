/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 102 ms, faster than 68.50% of JavaScript online submissions for Single Number.
Memory Usage: 44.5 MB, less than 69.45% of JavaScript online submissions for Single Number.
 */
 var singleNumber = function(nums) {
    
    let iterations = nums.length - 1

    nums.sort(function(a, b){return a-b});
     
    if (nums[0] !== nums[1]){
        return nums[0]
    }

    for (i=1; i< iterations; i++){
        if (nums[i]!== nums[i+1] && nums[i] !== nums[i-1]){
            return nums[i]
        }
    }

    return nums[iterations]
    
};