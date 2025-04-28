/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 27ms Beats 6.94%
 * Memory 68.92MB Beats 20.83%
 */
var countSubarrays = function(nums, k) {
    let ans = 0
    let curr = 0
    let right = 0

    for (let i=0; i<nums.length; i++){
        if (right < i){
            right = i
            curr = 0
        }
        while(valid(i) && right < nums.length){
            curr += nums[right++]
        }
        ans += right - i
        curr -= nums[i]
    }

    function valid(left){
        return (right + 1 - left) * (curr + nums[right]) < k
    }

    return ans
};