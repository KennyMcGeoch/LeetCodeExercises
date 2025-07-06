/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * Runtime 438ms Beats6.25%
 * Memory 96.70MB Beats 6.25%
 */
var FindSumPairs = function(nums1, nums2) {
    arr = nums2
    hash1 = {}
    hash2 = {}
    for (let i=0; i<nums1.length; i++) hash1[nums1[i]] = (hash1[nums1[i]] || 0) + 1
    for (let i=0; i<nums2.length; i++) hash2[nums2[i]] = (hash2[nums2[i]] || 0) + 1
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    hash2[arr[index]]--
    arr[index] += val
    hash2[arr[index]] = (hash2[arr[index]] || 0) + 1
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let ans = 0
    for (x in hash1){
        if (hash2[tot-x] !== undefined){
            ans += (hash1[x] * hash2[tot-Number(x)])
        }
        
    }
    return ans
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */