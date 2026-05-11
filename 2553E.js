/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 2ms Beats 94.44%
 * Memory 57.02MB Beats 94.44%
 */
var separateDigits = function(nums) {
    let ans = []
    let temp = []

    for (let i=0; i<nums.length; i++){
        while (nums[i]){
            temp.push(nums[i] % 10)
            nums[i] = Math.floor(nums[i]/10)
        }
        while(temp.length) ans.push(temp.pop())
    }
    return ans
};