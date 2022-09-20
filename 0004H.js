/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Runtime: 156 ms, faster than 62.76% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 47.5 MB, less than 61.55% of JavaScript online submissions for Median of Two Sorted Arrays.
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    joinedArray = nums1.concat(nums2).sort(function(a,b){return a-b});
    if (joinedArray.length % 2 !== 0){
        let arrayElement = (parseInt(joinedArray.length) - 1) / 2
        return joinedArray[arrayElement]
    }
    else{
        let arrayElement = (parseInt(joinedArray.length) / 2)
        sumOfArray = (joinedArray[arrayElement] + joinedArray[arrayElement-1])/2
        return sumOfArray
    }
    
};

findMedianSortedArrays([3], [-2, -1])
