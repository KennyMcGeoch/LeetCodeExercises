/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 73 ms, faster than 69.67% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 * Memory Usage: 44.4 MB, less than 87.00% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>b-a)
    return (nums[0]*nums[1]) - (nums[nums.length-1]*nums[nums.length-2])
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 52 ms, faster than 97.67% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 * Memory Usage: 44.9 MB, less than 51.67% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 */
var maxProductDifference2 = function(nums) {
    let min = [nums[0],nums[1]].sort((a,b)=>a-b)
    let max = [nums[0],nums[1]].sort((a,b)=>b-a)
    for (let i=2; i<nums.length; i++){
        if (nums[i] < min[1]){
            min.pop()
            min.push(nums[i])
            min.sort((a,b)=>a-b)
        }
        if (nums[i] > max[1]){
            max.pop()
            max.push(nums[i])
            max.sort((a,b)=>b-a)
        }
    }
    return (max[0]*max[1]) - (min[0]*min[1])
    
};