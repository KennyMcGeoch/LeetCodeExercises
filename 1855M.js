/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Runtime: 3283 ms, faster than 5.17% of JavaScript online submissions for Maximum Distance Between a Pair of Values.
 * Memory Usage: 54.3 MB, less than 62.07% of JavaScript online submissions for Maximum Distance Between a Pair of Values.
 */
 var maxDistance = function(nums1, nums2) {

    let maxPos = nums2.length - 1
    let iterations = maxPos
    let max = 0
    let iterationsN = nums1.length

    for (i=0; i<iterationsN; i++){
        temp = checkMaxPair(i)
        max = Math.max(temp,max)
        if (maxPos-- < max) return max
    }

    function checkMaxPair(num){
        if (nums1[num] > nums2[num+1])return 0
        for (j=iterations; j > num;j--){
            if (nums1[num] <= nums2[j]){
                return j-num
            }
        }
        return 0
    }

    return max
};