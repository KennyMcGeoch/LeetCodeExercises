/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 2ms Beats 97.75%
 * Memory 57.74MB Beats 91.44%
 */
var maximumProduct = function(nums) {
    let max = -Infinity
    let maxTwo = -Infinity
    let maxThree = -Infinity
    let min = Infinity
    let minTwo = Infinity

    for (let i=0; i<nums.length; i++){
        if (nums[i] > max){
            maxThree = maxTwo
            maxTwo = max
            max = nums[i]
        }
        else if (nums[i] > maxTwo){
            maxThree = maxTwo
            maxTwo = nums[i]
        }
        else if (nums[i] > maxThree){
            maxThree = nums[i]
        }
        if (min > nums[i]){
            minTwo = min
            min = nums[i]
        }
        else if (minTwo > nums[i]){
            minTwo = nums[i]
        }
    }
    return Math.max(max * maxTwo * maxThree, min * minTwo * max)
};