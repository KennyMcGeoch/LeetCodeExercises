/**
 * @param {number[]} nums
 * Runtime: 185 ms, faster than 65.04% of JavaScript online submissions for Range Sum Query - Immutable.
 * Memory Usage: 49.2 MB, less than 45.67% of JavaScript online submissions for Range Sum Query - Immutable.
 */
 var NumArray = function(nums) {
    total = [nums[0]]
    for (i=1; i<nums.length; i++){
        total[i] = parseInt(total[i-1] + nums[i])    
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) return total[right]
    return total[right] - total[left-1]   
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */