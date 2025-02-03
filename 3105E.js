/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 51.65MB Beats 37.50%
 */
var longestMonotonicSubarray = function(nums) {
    let inc = 0
    let dec = 0
    let ans = 0

    for (let i=1; i<nums.length; i++){
        if (nums[i] > nums[i-1]){
            if (dec){
                ans = Math.max(ans,dec)
                dec = 0
            }
            inc++
        }
        else if (nums[i] < nums[i-1]){
            if (inc){
                ans = Math.max(ans,inc)
                inc = 0
            }
            dec++
        }
        else{
            ans = Math.max(ans,inc,dec)
            inc = 0
            dec = 0
        }
    }

    return Math.max(inc,dec,ans) + 1
};