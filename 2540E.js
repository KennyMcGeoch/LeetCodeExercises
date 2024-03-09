/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Runtime: 52 ms, faster than 98.98% of JavaScript online submissions for Minimum Common Value.
 * Memory Usage: 56.5 MB, less than 78.06% of JavaScript online submissions for Minimum Common Value.
 */
var getCommon = function(nums1, nums2) {
    
    let left = 0
    let right = 0
    
    while(nums1[left] && nums2[right]){
        if (nums1[left] === nums2[right]) return nums1[left]
        else if (nums1[left] > nums2[right]) right++
        else left++
    }
    
    return -1
    
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Runtime: 58 ms, faster than 94.39% of JavaScript online submissions for Minimum Common Value.
 * Memory Usage: 56.2 MB, less than 89.80% of JavaScript online submissions for Minimum Common Value.
 */
var getCommon = function(nums1, nums2) {
    
    let left = 0
    let right = 0
    
    while(true){
        if (nums1[left] === nums2[right]) return nums1[left]
        else if (nums1[left] > nums2[right]) right++
        else if (nums1[left] === undefined) return -1
        else if (nums2[right] === undefined) return -1
        else left++
    }
    
};

