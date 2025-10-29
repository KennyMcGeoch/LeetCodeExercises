/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 45ms Beats 93.09%
 * Memory 55.73MB Beats 79.08%
 */
var countValidSelections = function(nums) {
    let sum = nums.reduce((a,b)=>a+b)
    let curr = 0
    let ans = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i]){
            curr += nums[i]
            sum -= nums[i]
        }
        else{
            if (sum === curr) ans += 2
            else if (Math.abs(sum-curr) === 1) ans++
        }
    }
    return ans
};