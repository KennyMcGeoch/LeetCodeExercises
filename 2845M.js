/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 * Runtime 25ms Beats 76.92%
 * Memory 70.96MB Beats 100.00%
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    let hash = {}
    hash[0] = 1
    let ans = 0
    let curr = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i] % modulo === k) curr++
        curr %= modulo
        if (hash[(curr-k + modulo) % modulo] === undefined){
            hash[curr] = (hash[curr] || 0) + 1
        }
        else{
            ans += hash[(curr-k + modulo) % modulo]
            hash[curr] = (hash[curr] || 0) + 1
        }
    }

    return ans
};