/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 44ms Beats 93.88%
 * Memory 54.98MB Beats 91.84%


 */
var minOperations = function(nums, k) {
    let hash = new Set()

    for (let i=0; i<nums.length; i++){
        if (nums[i] < k) return -1
        hash.add(nums[i])
    }

    if (hash.has(k)) return hash.size - 1
    return hash.size
};