/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 * Runtime 1ms Beats 92.00%
 * Memory 59.09MB Beats 16.00%
 */
var mergeArrays = function(nums1, nums2) {
    let hash = {}
    let ans = []
    for (let i=0; i<nums1.length; i++) hash[nums1[i][0]] = (hash[nums1[i][0]] || 0) + nums1[i][1]
    for (let i=0; i<nums2.length; i++) hash[nums2[i][0]] = (hash[nums2[i][0]] || 0) + nums2[i][1]
    for (x in hash) ans.push([Number(x), hash[x]])
    return ans.sort((a,b)=>a[0]-b[0])
};

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 * Runtime 0ms Beats100.00%
 * Memory 59.76MB Beats 13.33%
 */
var mergeArrays = function(nums1, nums2) {
    let ans = []
    let left = 0
    let right = 0
    while (left < nums1.length && right < nums2.length){
        if (nums1[left][0] === nums2[right][0]){
            ans.push([nums1[left][0],nums1[left++][1] + nums2[right++][1]])
        }
        else if (nums1[left][0] < nums2[right][0]) ans.push(nums1[left++])
        else ans.push(nums2[right++])
    }
    while(left < nums1.length) ans.push(nums1[left++])
    while(right < nums2.length) ans.push(nums2[right++])
    return ans
};