/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 66.72MB Beats 93.10%
 */
var minimumDeletions = function(nums) {
    let min = 1000000
    let minInd = 0
    let max = -1000000
    let maxInd = 0

    for (let i=0; i<nums.length; i++){
        if (nums[i] < min){
            min = nums[i]
            minInd = i
        }
        if (nums[i] > max){
            max = nums[i]
            maxInd = i
        }
    }

    return Math.min(Math.max(maxInd, minInd)+1, nums.length - Math.min(maxInd,minInd), nums.length + Math.min(maxInd,minInd) + 1 - Math.max(minInd,maxInd))
};