/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 15ms Beats 38.64%
 * Memory 60.21MB Beats 52.27%
 */
var countCompleteSubarrays = function(nums) {
    let hash = {}
    let target = new Set(nums).size
    let ans = 0
    let curr = 0
    let ind = -1

    for (let i=0; i<nums.length; i++){
        while(curr < target && ind <nums.length){
            hash[nums[++ind]] = (hash[nums[ind]] || 0) + 1
            if (hash[nums[ind]] === 1) curr++
        }
        ans += (nums.length - ind)
        if (hash[nums[i]]-- === 1) curr--
    }

    return ans
};