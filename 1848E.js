/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.76MB Beats 55.10%
 */
var getMinDistance = function(nums, target, start) {
    for(let i=0; i<nums.length; i++){
        if (nums[start-i] === target) return i
        else if (nums[start+i] === target) return i
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.77MB Beats 55.10%
 */
var getMinDistance = function(nums, target, start) {
    for(let i=0; i<nums.length; i++){
        if (i <= start && nums[start-i] === target) return i
        else if (i + start < nums.length && nums[start+i] === target) return i
    }
};