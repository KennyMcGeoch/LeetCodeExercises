/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.46MB Beats 100.00%
 */
var minOperations = function(nums) {
    let ones = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i] === 1) ones++
    }
    if (ones) return nums.length - ones

    function gcd(one, two){
        while(one && two){
            if (one > two) one %= two
            else two %= one
        }
        return Math.max(one,two)
    }
    let curr = nums[0]
    let start = -1
    for (let i=1; i<nums.length; i++){
        curr = gcd(curr, nums[i])
        if (curr === 1){
            start = i
            i = nums.length
        }
    }
    if (start === -1) return -1
    let minLen = start
    for (let i=start; i<nums.length; i++){
        curr = nums[i]
        start = i
        while (curr > 1){
            curr = gcd(curr, nums[--start])
        }
        minLen = Math.min(minLen, i - start)
    }

    return --minLen + nums.length
};