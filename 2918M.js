/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Runtime
71ms
Beats94.74%
Analyze Complexity
Memory
70.32MB
Beats89.47%

 */
var minSum = function(nums1, nums2) {
    let lSum = 0
    let lZero = 0
    let rSum = 0
    let rZero = 0

    for (let i=0; i<nums1.length; i++){
        if (nums1[i]) lSum += nums1[i]
        else lZero++
    }
    for (let i=0; i<nums2.length; i++){
        if (nums2[i]) rSum += nums2[i]
        else rZero++
    }
    if (lZero && rZero) return Math.max(lSum+lZero, rSum+rZero)
    else if (lZero){
        if (lSum + lZero <= rSum) return rSum
        else return -1
    }
    else if (rZero){
        if (rSum + rZero <= lSum) return lSum
        else return -1
    }
    else if (lSum === rSum) return lSum
    else return -1
};