/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Runtime: 88 ms, faster than 59.53% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 42.3 MB, less than 29.64% of JavaScript online submissions for Merge Sorted Array.
 */
 var merge = function(nums1, m, nums2, n) {

    let iterations = nums1.length
    let numsCount = nums2.length - 1
    let nextPlacement = m + n - 1
    let firstCheck = m - 1

    for (i=m; i<iterations; i++){
        nums1[i] = 0
    }
    
    for (i=0; i<iterations; i++){
        if (nums2[numsCount] > nums1[firstCheck]){
            nums1[nextPlacement--] = nums2[numsCount--]
        }
        else if (nums2[numsCount] === undefined){
            return
        }
        else if (nums1[firstCheck] === undefined){
            nums1[nextPlacement--] = nums2[numsCount--]
        }
        else{
            nums1[nextPlacement--] = nums1[firstCheck--]
        }

    }    
};

merge([0,0,0,0,0], 0, [1,2,3,4,5],5)