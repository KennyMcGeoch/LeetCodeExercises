/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 104 ms, faster than 34.05% of JavaScript online submissions for Sign of the Product of an Array.
 * Memory Usage: 43.9 MB, less than 41.04% of JavaScript online submissions for Sign of the Product of an Array.
 */
 var arraySign = function(nums) {

    if (nums.includes(0)){
        return 0
    }

    return Math.sign(nums.reduce(function (previousValue, currentValue) {
        return previousValue * currentValue;}) % 10000000
    )
    
};

arraySign([-1,-2,-3,-4,3,2,1])