/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 63 ms, faster than 52.15% of JavaScript online submissions for Find Greatest Common Divisor of Array.
 * Memory Usage: 44.6 MB, less than 7.36% of JavaScript online submissions for Find Greatest Common Divisor of Array.
 */
var findGCD = function(nums) {
    nums.sort((a,b)=>a-b)
    let numOne = nums[0]
    let numTwo = nums[nums.length-1]
    for (let i=numOne; i>1; i--){
        if (numOne % i === 0 && numTwo % i === 0)return i
    }
    return 1
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 54 ms, faster than 88.04% of JavaScript online submissions for Find Greatest Common Divisor of Array.
 * Memory Usage: 44.1 MB, less than 23.93% of JavaScript online submissions for Find Greatest Common Divisor of Array.
 */
var findGCDv = function(nums) {
    nums.sort((a,b)=>a-b)
    let numOne = nums[0]
    let numTwo = nums[nums.length-1]
    while (numOne > 0 && numTwo > 0){
        if (numOne > numTwo) numOne %= numTwo
        else numTwo %= numOne
    }
    return Math.max(numOne, numTwo)
};