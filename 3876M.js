/**
 * @param {number[]} nums1
 * @return {boolean}
 * Runtime 4ms Beats 100.00%
 * Memory 71.97MB Beats100.00%
 */
var uniformArray = function(nums1) {
    let low = Infinity
    for (let i=0; i<nums1.length; i++){
        if (nums1[i] % 2 === 1) low = Math.min(low, nums1[i])
    }
    if (low === Infinity) return true
    for (let i=0; i<nums1.length; i++){
        if (nums1[i] % 2 === 0 && nums1[i] < low) return false
    }

    return true
};