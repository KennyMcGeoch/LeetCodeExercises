/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 58.16MB Beats 46.15%
 */
var minMoves = function(nums) {
    let ans = 0
    let min = nums[0]

    for (let i=1; i<nums.length; i++){
        if (nums[i] < min){
            ans += ((min-nums[i])*i)
            min = nums[i]
        }
        else ans += (nums[i]-min)
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 94.87%
 * Memory 57.39MB Beats 71.79%
 */
var minMoves = function(nums) {
    return nums.reduce((a,b)=>a+b) - (Math.min(...nums) * nums.length)
};