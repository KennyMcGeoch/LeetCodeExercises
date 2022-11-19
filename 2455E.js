/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 89 ms, faster than 74.65% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
 * Memory Usage: 42.4 MB, less than 83.80% of JavaScript online submissions for Average Value of Even Numbers That Are Divisible by Three.
 */
 var averageValue = function(nums) {
    
    let count = 0
    let total = 0
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        if (nums[i] % 6 === 0){
            count++
            total += nums[i]
        }
    }
    if (count === 0)return 0
    return Math.floor(total / count)
};