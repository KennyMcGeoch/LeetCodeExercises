/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 100 ms, faster than 51.89% of JavaScript online submissions for Intersection of Two Arrays.
 * Memory Usage: 42.4 MB, less than 86.60% of JavaScript online submissions for Intersection of Two Arrays.
 */
 var intersection = function(nums1, nums2) {

    let solution = []
    let iterations = nums1.length

    for (i=0; i<iterations; i++){
        if (nums2.includes(nums1[i]) && !(solution.includes(nums1[i]))){
            solution.push(nums1[i])
        }
    }

    return solution  
};

intersection([1,2,2,2,1],[2,2,2,1])