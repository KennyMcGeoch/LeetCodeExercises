/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 99 ms, faster than 58.52% of JavaScript online submissions for Intersection of Two Arrays II.
 * Memory Usage: 42.4 MB, less than 82.11% of JavaScript online submissions for Intersection of Two Arrays II.
 */
 var intersect = function(nums1, nums2) {

    let solution = []
    let iterations = nums1.length

    for (i=0; i<iterations; i++){
        if (nums2.includes(nums1[i])){
            solution.push(nums1[i])
            nums2.splice(nums2.indexOf(nums1[i]),1)
        }
    }

    return solution    
};

intersect([1,2,2,2,1],[2,2,2])