/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 52.99MB Beats 96.92%
 */
var countHillValley = function(nums) {
    let ans = 0
    let curr = null

    for (let i=1; i<nums.length; i++){
        if (nums[i] > nums[i-1]){
            if (curr === 0) ans++
            curr = 1
        }
        else if (nums[i]< nums[i-1]){
            if (curr === 1) ans++
            curr = 0
        }
    }

    return ans
};