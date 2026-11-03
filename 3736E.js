/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 79.03%
 * Memory 55.25MB Beats 93.55%
 */
var minMoves = function(nums) {
    let ans = 0
    let max = nums[0]

    for (let i=1; i<nums.length; i++){
        if (nums[i] > max){
            ans += ((nums[i]-max)*i)
            max = nums[i]
        }
        else if (nums[i] < max) ans += (max-nums[i])
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.90MB Beats 82.26%
 */
var minMoves = function(nums) {
    let ans = 0
    let max = Math.max(...nums)

    for (let i=0; i<nums.length; i++) ans += (max-nums[i])

    return ans
};