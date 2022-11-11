/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 144 ms, faster than 15.08% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.
 * Memory Usage: 44.1 MB, less than 82.54% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.
 */
 var minSubsequence = function(nums) {

    let total = nums.reduce((curr,prev)=>curr+prev)
    total /= 2
    let solution = []
    let iterations = nums.length
    let count = 0
    nums.sort((a,b)=>b-a)

    for (i=0; i<iterations; i++){
        solution.push(nums[i])
        count += nums[i]
        if (count > total) return solution
    }

    return solution
    
};