/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime 53ms Beats 88.14%
 * Memory 54.22MB Beats 98.31%
 */
var hasIncreasingSubarrays = function(nums, k) {
    let prev = 0
    let curr = 1
    for (let i=1; i<nums.length; i++){
        if (nums[i] > nums[i-1])curr++
        else{
            if (curr/2 >= k) return true
            else if (curr >= k){
                if (prev) return true
                else prev = 1
            }
            else prev = 0
            curr = 1
        }
    }
    return (curr >= k*2 || (curr >= k && prev))
};