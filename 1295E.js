/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.14MB Beats 51.96%
 */
var findNumbers = function(nums) {
    let ans = 0

    function check(num){
        if (num < 10) return 0
        if (num < 100) return 1
        if (num < 1000) return 0
        if (num < 10000) return 1
        if (num < 100000) return 0
        else return 1
    }

    for (let i=0; i<nums.length; i++) ans += check(nums[i])

    return ans
};