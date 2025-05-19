/**
 * @param {number[]} nums
 * @return {string}
 * Runtime 0ms Beats100.00%
 * Memory 53.69MB Beats 93.62%
 */
var triangleType = function(nums) {
    if (nums[0] === nums[1]){
        if (nums[1] === nums[2]) return "equilateral"
        else if (nums[2] >= nums[0] * 2) return "none"
        else return "isosceles"
    }
    else if (nums[1] === nums[2]){
        if (nums[0] >= nums[1] * 2) return "none"
        else return "isosceles"
    }
    else if (nums[0] === nums[2]){
        if (nums[1] >= nums[0] * 2) return "none"
        else return "isosceles"
    }
    else{
        if (nums[0] >= nums[1] + nums[2]) return "none"
        else if (nums[1] >= nums[0] + nums[2]) return "none"
        else if (nums[2] >= nums[1] + nums[0]) return "none"
        else return "scalene"
    }
};

/**
 * @param {number[]} nums
 * @return {string}
 * Runtime 1ms Beats 43.62%
 * Memory 55.26MB Beats 42.55%
 */
var triangleType = function(nums) {
    nums.sort((a,b)=>b-a)
    if (nums[0] === nums[2]) return "equilateral"
    if (nums[0] >= nums[1] + nums[2]) return "none"
    if (nums[0] === nums[1] || nums[1] === nums[2]) return "isosceles"
    else return "scalene"
};