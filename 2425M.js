/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 60.54MB Beats 83.33%
 */
var xorAllNums = function(nums1, nums2) {
    let ans = 0
    if (nums1.length % 2 === 1){
        for (let i=0; i<nums2.length; i++) ans ^= nums2[i]
    }
    if (nums2.length % 2 === 1){
        for (let i=0; i<nums1.length; i++) ans ^= nums1[i]
    }
    return ans
};