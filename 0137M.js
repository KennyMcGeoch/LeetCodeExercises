/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 95 ms, faster than 68.69% of JavaScript online submissions for Single Number II.
Memory Usage: 43.3 MB, less than 61.69% of JavaScript online submissions for Single Number II.
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