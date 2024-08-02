/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 68 ms, faster than 97.22% of JavaScript online submissions for Minimum Swaps to Group All 1's Together II.
 * Memory Usage: 64.7 MB, less than 23.61% of JavaScript online submissions for Minimum Swaps to Group All 1's Together II.
 */
var minSwaps = function(nums) {
    
    let len = nums.length
    let ones = 0
    
    for (let i=0; i<len; i++){
        nums.push(nums[i])
        ones += nums[i]
    }

    let right = 0
    let left = 0
    let curr = 0
    while (right < ones){
        curr += nums[right++]
    }
    let ans = curr
    while (left < len){
        curr -= nums[left++]
        curr += nums[right++]
        if (curr > ans){
            ans = curr
            if (ans === ones) return 0
        }
    }
    return ones - ans
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 65 ms, faster than 100.00% of JavaScript online submissions for Minimum Swaps to Group All 1's Together II.
 * Memory Usage: 58.3 MB, less than 80.56% of JavaScript online submissions for Minimum Swaps to Group All 1's Together II.
 */
var minSwaps = function(nums) {
    
    let len = nums.length
    let ones = nums.reduce((a,b)=> a+b)

    let right = 0
    let left = 0
    let curr = 0
    while (right < ones){
        curr += nums[right++]
    }
    let ans = curr
    while (left < len){
        curr -= nums[left++]
        curr += nums[right++]
        if (curr > ans){
            ans = curr
            if (ans === ones) return 0
        }
        if (right === nums.length)right = 0
    }
    return ones - ans
    
};