/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 102ms Beats25.00% 
 * Memory 87.09MB Beats25.00%
 */
var countGood = function(nums, k) {
    let hash = {}
    let good = 0
    let len = nums.length
    let right = 0

    while (good < k && right < len){
        hash[nums[right]] = (hash[nums[right]] || 0) + 1
        good += hash[nums[right++]] - 1
    }
    if (good < k) return 0
    let ans = len - right + 1

    for (let i = 1; i<len; i++){
        good -= --hash[nums[i-1]]
        while (good < k && right < len){
            hash[nums[right]] = (hash[nums[right]] || 0) + 1
            good += hash[nums[right++]] - 1
        }
        if (good >= k) ans += (len-right) + 1
    }

    return ans
};